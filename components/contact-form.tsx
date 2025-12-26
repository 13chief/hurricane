'use client'

import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = React.useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = React.useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      company: String(formData.get('company') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      description: String(formData.get('description') || '').trim(),
    }

    if (!payload.name || !payload.email || !payload.company || !payload.description) {
      setStatus('error')
      setErrorMessage('Please fill out all required fields.')
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'Unable to send your request right now.')
      }

      form.reset()
      setStatus('success')
      router.push('/thank-you')
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your request right now.',
      )
    }
  }

  const handleInput = () => {
    if (status !== 'idle') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  return (
    <form
      id="order-form"
      className="space-y-6"
      onSubmit={handleSubmit}
      onInput={handleInput}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name" className="text-orange-200">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            required
            className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
            placeholder="Your full name"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-orange-200">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="company" className="text-orange-200">
            Company Name *
          </Label>
          <Input
            id="company"
            name="company"
            required
            className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
            placeholder="Your company"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-orange-200">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500"
            placeholder="(optional)"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description" className="text-orange-200">
          Brief Description of Business/Requirements *
        </Label>
        <Textarea
          id="description"
          name="description"
          required
          className="bg-slate-700 border-slate-600 text-orange-100 focus:border-orange-500 min-h-[100px]"
          placeholder="Tell us about your business and what you're looking to achieve..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === 'submitting'}
        className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-slate-900 font-semibold py-4 text-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : 'Order a Test Run'}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <div className="min-h-[24px] text-sm" aria-live="polite">
        {status === 'success' && (
          <p className="text-emerald-300">
            Thanks! We will reach out shortly.
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-300">{errorMessage}</p>
        )}
      </div>
    </form>
  )
}
