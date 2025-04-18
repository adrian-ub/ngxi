import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSmartPhoneLandscapeIcon],svg[hugeicons-smart-phone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 19c-3.3 0-4.95 0-5.975-1.025S2 15.3 2 12s0-4.95 1.025-5.975S5.7 5 9 5h6c3.3 0 4.95 0 5.975 1.025S22 8.7 22 12s0 4.95-1.025 5.975S18.3 19 15 19zm10-6v-2"></svg:path><svg:path d="m2 15l.534-.089c1.207-.201 1.784-.308 2.132-.739C5 13.76 5 13.173 5 12c0-1.224-.01-1.81-.378-2.225c-.352-.397-.93-.493-2.088-.686L2 9"></svg:path></svg:g>`,
})
export class HugeiconsSmartPhoneLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
