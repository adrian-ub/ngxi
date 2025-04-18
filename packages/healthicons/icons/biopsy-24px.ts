import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBiopsy24pxIcon],svg[healthicons-biopsy-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="m19.465 6.758l.472.47l-.516.515l-.043.043L18.29 8.87l-.05.05l-2.19 2.182a2.26 2.26 0 0 1-2.641.401l-.488-.255l-.01.01l-.337-.51a2.23 2.23 0 0 1 .29-2.812l2.146-2.138l.437-.435l.408-.407l.432-.43l.469-.467l.587.585l.529.527l.53-.527l.347-.347a.253.253 0 0 1 .356 0l.708.705a.244.244 0 0 1 0 .347l-.348.346l-.533.532zm.101 2.576l-.027-.296l.3.027c.13.011.227.12.227.245c0 .134-.11.247-.25.247a.25.25 0 0 1-.25-.223ZM8.22 15.784l.394.034l.285.326a1.25 1.25 0 0 0-.679-.36Zm1.032 1.23Zm-2.5 0a1.25 1.25 0 0 0 1.086 1.237l-1.002-.043l.374 1.048q.041.116.042.249a.75.75 0 0 1-.75.745a.75.75 0 0 1-.71-.498l-.184-.523l-.444.019a1.25 1.25 0 0 0 .602-2.225l.734.49l.321-.911a1.2 1.2 0 0 1-.07.411Zm-3.001.996Zm11.3-13.765l.173.488l-.495-.174a.25.25 0 0 1-.166-.232a.25.25 0 0 1 .487-.081Z"></svg:path>`,
})
export class HealthiconsBiopsy24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
