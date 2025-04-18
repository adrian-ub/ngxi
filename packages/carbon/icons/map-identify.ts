import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMapIdentifyIcon],svg[carbon-map-identify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8h2v6h-2zm0 10h2v6h-2zm3-3h6v2h-6zM8 15h6v2H8zm-4-5H2V4a2 2 0 0 1 2-2h6v2H4zm6 20H4a2 2 0 0 1-2-2v-6h2v6h6zm18 0h-6v-2h6v-6h2v6a2 2 0 0 1-2 2m2-20h-2V4h-6V2h6a2 2 0 0 1 2 2z"></svg:path>`,
})
export class CarbonMapIdentifyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
