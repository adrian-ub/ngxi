import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayBellIcon],svg[subway-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M419.7 340.3V169.6C419.7 75.4 343.3-1 249-1S78.3 75.4 78.3 169.7v170.7c0 42.7-42.7 85.3-42.7 85.3h426.7s-42.6-42.7-42.6-85.4M249 511c35.4 0 64-19.1 64-42.7H185c0 23.6 28.6 42.7 64 42.7"></svg:path>`,
})
export class SubwayBellIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
