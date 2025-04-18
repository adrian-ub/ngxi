import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTextFootnoteIcon],svg[hugeicons-text-footnote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.75 5.888v2.835m0 0L22 7.706m-2.25 1.017L17.5 7.706m2.25 1.017l-1.8 2.165m1.8-2.165l1.8 2.165M12 21.002H6M16 5.998c0-.657 0-.986-.08-1.274a2.1 2.1 0 0 0-1.166-1.35c-.265-.113-.566-.145-1.166-.209c-1.418-.151-3.2-.167-4.588-.167s-3.17.016-4.588.167c-.6.064-.9.096-1.166.21a2.1 2.1 0 0 0-1.165 1.35C2 5.011 2 5.34 2 5.997M9 3.35V21" color="currentColor"></svg:path>`,
})
export class HugeiconsTextFootnoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
