import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSendPlane2LineIcon],svg[ri-send-plane-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1.346a.5.5 0 0 1 .241.061l18.462 10.155a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V1.846a.5.5 0 0 1 .5-.5M5 4.382V11h5v2H5v6.617L18.85 12z"></svg:path>`,
})
export class RiSendPlane2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
