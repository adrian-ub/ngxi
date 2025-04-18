import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHarborIcon],svg[arcticons-harbor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 33.793l15.202-3.62l10.859 5.309L42.5 31.38M8.395 38.056L20.46 35.32l11.1 4.987l8.365-3.057"></svg:path><svg:rect width="15.186" height="4.891" x="16.263" y="16.109" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.416" ry="1.416"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.174 21l-1.948 15.054M28.665 21l1.317 18.599M17.846 11.19l5.872-3.498l5.872 3.54m-8.808-1.79v6.667m6.331-6.371v6.37"></svg:path>`,
})
export class ArcticonsHarborIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
