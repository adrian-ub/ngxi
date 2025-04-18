import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRightFilledIcon],svg[lsicon-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.207 8l-3.854 3.854l-.707-.707L8.793 8L5.646 4.854l.707-.708z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRightFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
