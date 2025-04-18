import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongRightRIcon],svg[gg-arrow-long-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m19.351 7.725l4.25 4.236l-4.235 4.25l-1.417-1.412l1.814-1.82l-11.866.04l-3.255 3.256l-4.243-4.243L4.642 7.79l3.229 3.23l11.911-.04l-1.843-1.837zm-14.71 5.721l1.415-1.414l-1.414-1.414l-1.415 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class GgArrowLongRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
