import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCloseSmallOutlineIcon],svg[lsicon-close-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m4.5 4.5l7 7m0-7l-7 7"></svg:path>`,
})
export class LsiconCloseSmallOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
