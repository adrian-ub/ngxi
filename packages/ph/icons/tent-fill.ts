import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTentFillIcon],svg[ph-tent-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255.31 188.75l-64-144A8 8 0 0 0 184 40H72a8 8 0 0 0-7.31 4.75v.12l-64 143.88A8 8 0 0 0 8 200h240a8 8 0 0 0 7.31-11.25M64 184H20.31L64 85.7Zm16 0V85.7l43.69 98.3Z"></svg:path>`,
})
export class PhTentFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
