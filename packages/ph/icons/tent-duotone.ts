import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTentDuotoneIcon],svg[ph-tent-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M136 192H8L72 48Z" opacity=".2"></svg:path><svg:path d="m255.31 188.75l-64-144A8 8 0 0 0 184 40H72a8 8 0 0 0-7.27 4.69a.2.2 0 0 0 0 .06v.12L.69 188.75A8 8 0 0 0 8 200h240a8 8 0 0 0 7.31-11.25M64 184H20.31L64 85.7Zm16 0V85.7l43.69 98.3Zm61.2 0L84.31 56h94.49l56.89 128Z"></svg:path></svg:g>`,
})
export class PhTentDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
