import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMapPinCheckIcon],svg[lucide-map-pin-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0a32 32 0 0 0 .813-.728"></svg:path><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="m16 18l2 2l4-4"></svg:path></svg:g>`,
})
export class LucideMapPinCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
