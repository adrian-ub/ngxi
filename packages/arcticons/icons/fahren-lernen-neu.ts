import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFahrenLernenNeuIcon],svg[arcticons-fahren-lernen-neu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 38.5a33 33 0 0 0-9.666-23.335l-3.537 3.537M26.47 21.53L10.859 34.74a4 4 0 0 0-4.186 6.588h0a4 4 0 0 0 5.657 0h0a4 4 0 0 0 .933-4.187l13.209-15.612ZM9.5 10.5v-5m6.438.634l-.586 2.945m6.777-1.067l-1.15 2.775m6.855.275l-1.668 2.496"></svg:path>`,
})
export class ArcticonsFahrenLernenNeuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
