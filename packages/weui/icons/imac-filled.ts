import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiImacFilledIcon],svg[weui-imac-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.155 19l.622 1.84a.5.5 0 0 1-.474.66H8.697a.5.5 0 0 1-.474-.66L8.845 19H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zm5.345-3h-17v1.5h17z"></svg:path>`,
})
export class WeuiImacFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
