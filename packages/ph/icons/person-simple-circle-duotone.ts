import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleCircleDuotoneIcon],svg[ph-person-simple-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></svg:path><svg:path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88M112 80a16 16 0 1 1 16 16a16 16 0 0 1-16-16m72 32a8 8 0 0 1-8 8h-40v13.58l30.66 46a8 8 0 0 1-13.32 8.88l-25.34-38l-25.34 38a8 8 0 1 1-13.32-8.88l30.66-46V120H80a8 8 0 0 1 0-16h96a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhPersonSimpleCircleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
