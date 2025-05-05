import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSendIcon],svg[picon-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l8 3.5L0 7l1-3q5-.5 0-1"></svg:path>`,
})
export class PiconSendIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
