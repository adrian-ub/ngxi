import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongLeftRIcon],svg[gg-arrow-long-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.649 7.725l-4.25 4.236l4.235 4.25l1.417-1.412l-1.814-1.82l11.866.04l3.255 3.256l4.243-4.243L19.36 7.79l-3.23 3.23l-11.911-.04l1.843-1.837zm13.295 4.307l1.415-1.414l1.414 1.414l-1.415 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
