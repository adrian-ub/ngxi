import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideRadioReceiverIcon],svg[lucide-radio-receiver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 16v2m14-2v2"></svg:path><svg:rect width="20" height="8" x="2" y="8" rx="2"></svg:rect><svg:path d="M18 12h.01"></svg:path></svg:g>`,
})
export class LucideRadioReceiverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
