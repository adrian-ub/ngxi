import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAirportSecurityIcon],svg[streamline-airport-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.36 13.433a1 1 0 0 1-.72 0A9.565 9.565 0 0 1 .505 4.498V1.499a1 1 0 0 1 1-.999h10.993a1 1 0 0 1 1 1v2.998a9.565 9.565 0 0 1-6.137 8.935Z"></svg:path><svg:path d="m3.059 4.55l.826-.282a.28.28 0 0 1 .364.149l.603.934l3.306-1.653A2.058 2.058 0 0 1 11.1 4.739a.563.563 0 0 1-.372.703L8.79 6.01l-.215.066l-.744 2.178a.3.3 0 0 1-.198.207L6.439 8.9a.306.306 0 0 1-.397-.347l.537-1.765l-.14.041l-2.107.686a.554.554 0 0 1-.703-.339l-.744-2.289a.28.28 0 0 1 .174-.339Z"></svg:path></svg:g>`,
})
export class StreamlineAirportSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
