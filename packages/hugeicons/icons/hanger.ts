import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHangerIcon],svg[hugeicons-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m4.126 15.367l6.002-3.377A3.7 3.7 0 0 1 12 11.5a3.7 3.7 0 0 1 1.872.49l6.002 3.377a2.208 2.208 0 0 1-1.082 4.133H5.208a2.208 2.208 0 0 1-1.082-4.133"></svg:path><svg:path d="M10 6.405c0-1.052.895-1.905 2-1.905s2 .853 2 1.905c0 .72-.42 1.346-1.038 1.67c-.489.256-.962.682-.962 1.235v2.19"></svg:path></svg:g>`,
})
export class HugeiconsHangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
