import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabSoapBarIcon],svg[lucide-lab-soap-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11.3 2.7c.9-.9 2.5-.9 3.4 0l5.6 5.6c.9.9.9 2.5 0 3.4l-8.6 8.6c-.9.9-2.5.9-3.4 0l-5.6-5.6c-.9-.9-.9-2.5 0-3.4Z"></svg:path><svg:path d="m13 7l-6 6l3 3l6-6Z"></svg:path><svg:circle cx="20.5" cy="17.5" r=".5"></svg:circle><svg:circle cx="17.5" cy="21.5" r=".5"></svg:circle><svg:path d="M22 22h.01"></svg:path></svg:g>`,
})
export class LucideLabSoapBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
