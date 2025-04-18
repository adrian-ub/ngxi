import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrafficConeIcon],svg[ph-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 208h-18.31L153.42 34.75A16 16 0 0 0 138.31 24h-20.62a16 16 0 0 0-15.11 10.74L42.31 208H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16M95.43 104h65.14l16.7 48H78.73Zm22.26-64h20.62L155 88h-54ZM73.17 168h109.66l13.92 40H59.25Z"></svg:path>`,
})
export class PhTrafficConeIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
