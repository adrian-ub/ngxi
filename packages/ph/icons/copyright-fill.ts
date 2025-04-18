import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCopyrightFillIcon],svg[ph-copyright-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 56a72 72 0 1 0 72 72a72.08 72.08 0 0 0-72-72m0 104a31.8 31.8 0 0 0 25.61-12.8a8 8 0 1 1 12.79 9.61a48 48 0 1 1 0-57.63a8 8 0 1 1-12.79 9.61A32 32 0 1 0 128 160m0-136a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></svg:path>`,
})
export class PhCopyrightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
