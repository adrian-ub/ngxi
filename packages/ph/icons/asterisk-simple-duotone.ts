import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAsteriskSimpleDuotoneIcon],svg[ph-asterisk-simple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 128a72 72 0 1 1-72-72a72 72 0 0 1 72 72" opacity=".2"></svg:path><svg:path d="m211 103.43l-70.13 28l49.47 63.61a8 8 0 1 1-12.63 9.82L128 141l-49.68 63.91a8 8 0 0 1-12.63-9.82l49.47-63.61L45 103.43a8 8 0 0 1 6-14.86l69 27.61V40a8 8 0 0 1 16 0v76.18l69-27.61a8 8 0 1 1 6 14.86"></svg:path></svg:g>`,
})
export class PhAsteriskSimpleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
