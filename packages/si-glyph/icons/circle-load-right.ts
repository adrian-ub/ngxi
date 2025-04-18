import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCircleLoadRightIcon],svg[si-glyph-circle-load-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.04 7.379C.115 3.257 3.392-.033 7.344.042c3.917.073 6.854 2.929 6.83 7.003h1.545a.57.57 0 0 1 0 .799L13.873 9.86a.546.546 0 0 1-.785 0l-1.725-2.016a.57.57 0 0 1 0-.799h1.422c.023-3.338-2.259-5.584-5.467-5.644c-3.233-.062-5.912 2.63-5.975 6.002c-.062 3.322 2.445 6.077 5.613 6.216v1.361C3.059 14.842-.035 11.46.04 7.379"></svg:path>`,
})
export class SiGlyphCircleLoadRightIcon {
  readonly viewBox = input("0 0 17 17")
  readonly width = input("1em")
  readonly height = input("1em")
}
