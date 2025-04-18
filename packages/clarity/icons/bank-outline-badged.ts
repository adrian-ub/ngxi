import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityBankOutlineBadgedIcon],svg[clarity-bank-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26a1 1 0 0 0 1 1h26a1 1 0 0 0 0-2h-3v-7.37h-2V25h-7v-7.37h-2V25h-7v-7.37H8V25H5a1 1 0 0 0-1 1" class="clr-i-outline--badged clr-i-outline-path-1--badged"></svg:path><svg:path fill="currentColor" d="M5.02 14h26v2h-26z" class="clr-i-outline--badged clr-i-outline-path-2--badged"></svg:path><svg:path fill="currentColor" d="M33 29H3a1 1 0 0 0 0 2h30a1 1 0 0 0 0-2M22.15 11.58h3.21l-6.71-3.86a.8.8 0 0 0-.8 0l-6.72 3.86h3.21l3.9-2.24Z" class="clr-i-outline--badged clr-i-outline-path-3--badged"></svg:path><svg:path fill="currentColor" d="M22.5 6v-.48L18 2.92L2.5 11.83a1 1 0 1 0 1 1.73L18 5.23L22.77 8a7.5 7.5 0 0 1-.27-2" class="clr-i-outline--badged clr-i-outline-path-4--badged"></svg:path><svg:path fill="currentColor" d="m31.94 13.24l.56.32a1 1 0 0 0 1.44-1.19a7.5 7.5 0 0 1-2 .87" class="clr-i-outline--badged clr-i-outline-path-5--badged"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor" class="clr-i-outline--badged clr-i-outline-path-6--badged clr-i-badge"></svg:circle><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityBankOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
