import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCloseSmallFilledIcon],svg[lsicon-close-small-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8 7.293l3.146-3.147l.708.708L8.707 8l3.147 3.146l-.707.707L8 8.708l-3.146 3.146l-.708-.707L7.293 8L4.146 4.854l.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCloseSmallFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
