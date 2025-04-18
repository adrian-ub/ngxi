import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinalSurgeIcon],svg[arcticons-final-surge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4m-24.141 9.872h8.627M12.838 24h5.607m-4.086-8.628l-3.043 17.256"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.56 30.737c.815 1.378 2.051 1.89 3.897 1.89h2.555c2.377 0 4.645-1.93 5.065-4.313h0C35.497 25.93 33.91 24 31.533 24h-2.822c-2.378 0-3.964-1.931-3.544-4.314h0c.42-2.382 2.687-4.314 5.065-4.314h2.554c1.846 0 3.083.513 3.898 1.891"></svg:path>`,
})
export class ArcticonsFinalSurgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
