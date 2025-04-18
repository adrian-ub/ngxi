import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScreenIcon],svg[carbon-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M18 28h-4v-4h4Zm10-6H4V6h24Z"></svg:path>`,
})
export class CarbonScreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
