import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonVlanIcon],svg[carbon-vlan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 17v-2H17v-4h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h2v4H2v2h6v4H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2v-4h12v4h-2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2v-4ZM13 4h6v5h-6Zm-1 24H6v-5h6Zm14 0h-6v-5h6Z"></svg:path>`,
})
export class CarbonVlanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
