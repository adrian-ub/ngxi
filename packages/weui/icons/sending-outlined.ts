import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiSendingOutlinedIcon],svg[weui-sending-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.871 11.25H13v1.5H7.871l2.432 2.432l-1.06 1.06l-3.182-3.181l-.707-.707a.5.5 0 0 1 0-.708l3.889-3.889l1.06 1.061zm6.629 0H16v1.5h-1.5zm3 0H19v1.5h-1.5z"></svg:path>`,
})
export class WeuiSendingOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
