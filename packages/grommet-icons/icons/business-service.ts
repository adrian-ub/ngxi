import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBusinessServiceIcon],svg[grommet-icons-business-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M4 23H1V5h22v18h-7M8 5V1h8v4M9 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm5.008 1.876Q14.486 18 15 18a4 4 0 1 0-2.236-7.317m-5.062 5.043A4 4 0 0 0 10 23a4 4 0 0 0 1.401-7.748"></svg:path>`,
})
export class GrommetIconsBusinessServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
