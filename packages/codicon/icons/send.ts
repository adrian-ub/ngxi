import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSendIcon],svg[codicon-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 1.91l.78-.41L15 7.449v.95L1.78 14.33L1 13.91L2.583 8zM3.612 8.5L2.33 13.13L13.5 7.9L2.33 2.839l1.282 4.6L9 7.5v1z"></svg:path>`,
})
export class CodiconSendIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
