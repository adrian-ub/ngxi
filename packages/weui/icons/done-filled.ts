import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDoneFilledIcon],svg[weui-done-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.657 18.435L3 12.778l1.414-1.414l4.95 4.95L20.678 5l1.414 1.414l-12.02 12.021a1 1 0 0 1-1.415 0"></svg:path>`,
})
export class WeuiDoneFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
