import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiMosaicFilledIcon],svg[weui-mosaic-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m6.8 12.6V18h2.4v-2.4zm-4.8 0V18h2.4v-2.4zm9.6 0V18H18v-2.4zm0-9.6v2.4H18V6zM6 10.8v2.4h2.4v-2.4zM6 6v2.4h2.4V6zm2.4 7.2v2.4h2.4v-2.4zm0-4.8v2.4h2.4V8.4zm4.8 4.8v2.4h2.4v-2.4zm0-4.8v2.4h2.4V8.4zM10.8 6v2.4h2.4V6zm0 4.8v2.4h2.4v-2.4zm4.8 0v2.4H18v-2.4z"></svg:path>`,
})
export class WeuiMosaicFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
