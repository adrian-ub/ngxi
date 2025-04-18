import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideBaggageClaimIcon],svg[lucide-baggage-claim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"></svg:path><svg:path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"></svg:path><svg:rect width="13" height="8" x="8" y="6" rx="1"></svg:rect><svg:circle cx="18" cy="20" r="2"></svg:circle><svg:circle cx="9" cy="20" r="2"></svg:circle></svg:g>`,
})
export class LucideBaggageClaimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
