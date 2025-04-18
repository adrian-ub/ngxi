import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySms8Icon],svg[subway-sms-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 85.9 0 192c0 75 57.5 139.8 141.1 171.4L85.3 512l160.5-128.4c3.4.1 6.7.4 10.2.4c141.4 0 256-85.9 256-192S397.4 0 256 0M128 234.7c-23.5 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c23.5 0 42.7 19.1 42.7 42.7s-19.2 42.7-42.7 42.7m128 0c-23.5 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c23.5 0 42.7 19.1 42.7 42.7s-19.2 42.7-42.7 42.7m128 0c-23.5 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c23.5 0 42.7 19.1 42.7 42.7s-19.2 42.7-42.7 42.7"></svg:path>`,
})
export class SubwaySms8Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
