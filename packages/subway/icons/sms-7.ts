import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwaySms7Icon],svg[subway-sms-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0C114.6 0 0 85.9 0 192c0 75 57.5 139.8 141.1 171.4L85.3 512l160.5-128.4c3.4.1 6.7.4 10.2.4c141.4 0 256-85.9 256-192S397.4 0 256 0m128 213.3H128v-42.7h256z"></svg:path>`,
})
export class SubwaySms7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
