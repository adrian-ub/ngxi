import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothCircleBrokenIcon],svg[solar-bluetooth-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14.2 9.593L11 12V7.623c0-.954 0-1.432.302-1.583c.301-.151.682.135 1.444.708L14.2 7.842c.533.401.8.602.8.876c0 .273-.267.474-.8.875Zm0 6.565l-1.454 1.094c-.762.573-1.143.86-1.444.708C11 17.809 11 17.331 11 16.377V12l3.2 2.407c.533.401.8.602.8.875c0 .274-.267.475-.8.876Z"></svg:path><svg:path fill="currentColor" d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"></svg:path><svg:path fill="currentColor" d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarBluetoothCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
