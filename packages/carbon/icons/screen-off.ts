import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScreenOffIcon],svg[carbon-screen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22H11.41L30 3.41L28.59 2l-2 2H4a2 2 0 0 0-2 2v16h2V6h20.59L2 28.59L3.41 30l6-6H12v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V9h-2Zm-10 6h-4v-4h4Z"></svg:path>`,
})
export class CarbonScreenOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
