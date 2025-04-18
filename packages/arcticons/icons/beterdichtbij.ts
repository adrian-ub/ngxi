import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBeterdichtbijIcon],svg[arcticons-beterdichtbij-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.964 5.5L24.055 17.15L12.066 5.5M42.5 11.667l-11.428 11.61L42.5 35.288M36.085 42.5l-12.03-11.73l-12.23 11.73M5.5 11.266l11.708 12.01L5.5 35.45"></svg:path>`,
})
export class ArcticonsBeterdichtbijIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
