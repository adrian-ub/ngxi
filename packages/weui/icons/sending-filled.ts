import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiSendingFilledIcon],svg[weui-sending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.828 11H13v2H8.828l1.829 1.828l-1.414 1.415l-2.829-2.829l-1.06-1.06a.5.5 0 0 1 0-.708l3.889-3.889l1.414 1.415zM14 11h2v2h-2zm3 0h2v2h-2z"></svg:path>`,
})
export class WeuiSendingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
