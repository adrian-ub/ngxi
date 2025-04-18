import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiBackFilledIcon],svg[weui-back-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"></svg:path>`,
})
export class WeuiBackFilledIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
