import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIpIcon],svg[carbon-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23h-2V9h6c1.103 0 2 .897 2 2v5c0 1.103-.897 2-2 2h-4zm0-7h4v-5.001h-4zM7 11h3v10H7v2h8v-2h-3V11h3V9H7z"></svg:path>`,
})
export class CarbonIpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
