import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiUpwardsButtonIcon],svg[openmoji-upwards-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M14.865 55L25 36.118l9.93-18.502c.441-.821 1.699-.821 2.14 0L47 36.118L57.135 55"></svg:path>`,
})
export class OpenmojiUpwardsButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
