import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBluetoothWaveBrokenIcon],svg[solar-bluetooth-wave-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.263 4.655C14.421 5.477 15 5.888 15 6.46c0 .57-.579.981-1.737 1.803L8 12V5.225c0-1.887 0-2.83.605-3.14c.362-.185.783-.062 1.395.3"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="m13.263 19.345l-1.738 1.234c-1.544 1.096-2.316 1.645-2.92 1.335C8 21.605 8 20.662 8 18.775V12l5.263 3.738C14.421 16.56 15 16.97 15 17.54s-.579.982-1.737 1.804Z"></svg:path><svg:path fill="currentColor" d="M2.57 14.886a.75.75 0 1 0 .86 1.228zm.86 1.228l5-3.5l-.86-1.228l-5 3.5z"></svg:path><svg:path fill="currentColor" d="M2.57 9.114a.75.75 0 0 1 .86-1.228zm.86-1.228l5 3.5l-.86 1.228l-5-3.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 5s2 2.1 2 7c0 .728-.044 1.394-.12 2M19 19s.304-.32.675-1M17 8s1 1.9 1 4s-1 4-1 4"></svg:path></svg:g>`,
})
export class SolarBluetoothWaveBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
