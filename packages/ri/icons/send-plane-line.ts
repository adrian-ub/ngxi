import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSendPlaneLineIcon],svg[ri-send-plane-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.727 2.957l-5.454 19.086c-.15.529-.475.553-.717.07L11 13L1.923 9.37c-.51-.205-.503-.51.034-.689L21.043 2.32c.529-.176.832.12.684.638m-2.692 2.14L6.812 9.17l5.637 2.255l3.04 6.08z"></svg:path>`,
})
export class RiSendPlaneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
