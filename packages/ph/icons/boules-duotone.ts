import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBoulesDuotoneIcon],svg[ph-boules-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m215.52 88.48l-127 127a96.47 96.47 0 0 1-48-48l127-127a96.47 96.47 0 0 1 48 48" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56.28 36.41L60.4 184.28a88.3 88.3 0 0 1-10.19-15.18L169.1 50.21a87.8 87.8 0 0 1 15.18 10.2m11.31 11.31a87.8 87.8 0 0 1 10.2 15.18L86.9 205.79a87.8 87.8 0 0 1-15.18-10.2ZM128 40a87.8 87.8 0 0 1 25.05 3.64L43.64 153.05A88 88 0 0 1 128 40m0 176a87.8 87.8 0 0 1-25-3.64L212.36 103A88 88 0 0 1 128 216"></svg:path></svg:g>`,
})
export class PhBoulesDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
