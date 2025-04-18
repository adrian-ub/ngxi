import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSendFilledIcon],svg[tdesign-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.003 12L.292 1.665L3.587 11H11v2H3.587L.292 22.336z"></svg:path>`,
})
export class TdesignSendFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
