import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBluetoothSolidIcon],svg[teenyicons-bluetooth-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.27.057a.5.5 0 0 1 .517.033l5 3.5a.5.5 0 0 1-.005.823L8.254 7.5l4.528 3.087a.5.5 0 0 1 .005.823l-5 3.5A.5.5 0 0 1 7 14.5V8.355l-5.218 3.558l-.564-.826L6.48 7.5L1.22 3.913l.563-.826L7 6.645V.5a.5.5 0 0 1 .27-.443M8 8.537l3.62 2.468L8 13.54zm0-2.074V1.46l3.62 2.535z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBluetoothSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
