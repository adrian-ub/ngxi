import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRoundArrow5Icon],svg[subway-round-arrow-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447.1 86.2C400.3 33.4 332.2 0 256 0C114.6 0 0 114.6 0 256h64c0-106.1 85.9-192 192-192c58.5 0 110.4 26.5 145.5 67.8L341.3 192H512V21.3zM256 448c-58.5 0-110.4-26.5-145.5-67.8l60.2-60.2H0v170.7l64.9-64.9c46.8 52.8 115 86.2 191.1 86.2c141.4 0 256-114.6 256-256h-64c0 106.1-85.9 192-192 192m42.7-192c0-23.6-19.1-42.7-42.7-42.7s-42.7 19.1-42.7 42.7s19.1 42.7 42.7 42.7s42.7-19.1 42.7-42.7"></svg:path>`,
})
export class SubwayRoundArrow5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
