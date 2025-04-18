import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biLightningIcon],svg[bi-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1L4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04L11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"></svg:path>`,
})
export class BiLightningIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
