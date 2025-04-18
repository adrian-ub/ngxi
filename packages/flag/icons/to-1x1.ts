import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTo1x1Icon],svg[flag-to-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-width="1pt"><svg:path fill="#c10000" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 0h218.3v175H0z"></svg:path><svg:g fill="#c10000"><svg:path d="M89.8 27.3h34.8v121.9H89.8z"></svg:path><svg:path d="M168.2 70.8v34.8H46.3V70.8z"></svg:path></svg:g></svg:g>`,
})
export class FlagTo1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
