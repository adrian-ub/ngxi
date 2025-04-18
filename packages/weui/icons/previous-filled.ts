import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiPreviousFilledIcon],svg[weui-previous-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.586 9l1.828 1.828L11 12.243L7.464 8.707a1 1 0 0 1 0-1.414L11 3.757l1.414 1.415L10.586 7H15a6 6 0 1 1 0 12H4v-2h11a4 4 0 1 0 0-8z"></svg:path>`,
})
export class WeuiPreviousFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
