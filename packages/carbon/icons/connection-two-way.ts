import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionTwoWayIcon],svg[carbon-connection-two-way-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2v4H8zm0 6h2v4H8zm6-6h2v4h-2zm0 6h2v4h-2zm-6 6h2v4H8zm6 0h2v4h-2zm16 2h-8.17l2.58 2.59L23 26l-5-5l5-5l1.41 1.41L21.83 20H30zM19 12h8.17l-2.58 2.59L26 16l5-5l-5-5l-1.41 1.41L27.17 10H19z"></svg:path><svg:path fill="currentColor" d="M28 26v2H4V4h16v2h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h28v-4Z"></svg:path>`,
})
export class CarbonConnectionTwoWayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
