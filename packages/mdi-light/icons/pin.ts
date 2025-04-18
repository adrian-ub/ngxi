import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightPinIcon],svg[mdi-light-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12.41V5h1V4H8v1h1v7.41l-2 2V15h9v-.59zM17 14v2h-5v4.5l-.5 1.5l-.5-1.5V16H6v-2l2-2V6H7V3h9v3h-1v6z"></svg:path>`,
})
export class MdiLightPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
