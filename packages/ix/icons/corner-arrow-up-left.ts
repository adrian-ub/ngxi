import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCornerArrowUpLeftIcon],svg[ix-corner-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 213.333l128-128l30.293 30.293L167.04 192h238.293v256h-42.667V234.666H167.04l76.586 76.374l-30.293 30.293z"></svg:path>`,
})
export class IxCornerArrowUpLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
