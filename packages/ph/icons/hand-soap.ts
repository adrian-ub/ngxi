import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHandSoapIcon],svg[ph-hand-soap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 96.8V88a32 32 0 0 0-32-32h-16V32h32a8 8 0 0 1 8 8a8 8 0 0 0 16 0a24 24 0 0 0-24-24h-64a8 8 0 0 0 0 16h16v24h-16a32 32 0 0 0-32 32v8.8A40.07 40.07 0 0 0 40 136v80a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-80a40.07 40.07 0 0 0-32-39.2M104 72h48a16 16 0 0 1 16 16v8H88v-8a16 16 0 0 1 16-16m96 144H56v-80a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24z"></svg:path>`,
})
export class PhHandSoapIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
