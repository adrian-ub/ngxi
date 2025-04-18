import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsComicGeeksIcon],svg[arcticons-comic-geeks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 18.307l.296 23.216H29.99v-21.69zm24.489-3.479L42.5 6.478z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.796 13.999l24.193.829v5.004l12.511-9.18v20.862L29.989 41.523"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.32 23.341h15.665v3.998H9.32zM5.5 17.567l.296-3.568L16.65 6.477H42.5v4.176"></svg:path>`,
})
export class ArcticonsComicGeeksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
