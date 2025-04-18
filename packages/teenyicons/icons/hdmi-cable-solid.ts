import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHdmiCableSolidIcon],svg[teenyicons-hdmi-cable-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 0h9v5H3zm3 3H5V2h1zm4 0H9V2h1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 6h11v3.809l-2 1V13h-1v2H9v-2H6v2H5v-2H4v-2.191l-2-1z"></svg:path>`,
})
export class TeenyiconsHdmiCableSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
