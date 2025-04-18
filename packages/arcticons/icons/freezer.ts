import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreezerIcon],svg[arcticons-freezer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28.19" height="36.58" x="9.91" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.91 19.69h28.18m-22.62-3.84V9.79m0 19.37V23.1m-2.83 17.98v1.05A1.37 1.37 0 0 0 14 43.5h2.47a1.37 1.37 0 0 0 1.37-1.37v-1.05m12.31 0v1.05a1.37 1.37 0 0 0 1.37 1.37H34a1.37 1.37 0 0 0 1.37-1.37v-1.05"></svg:path>`,
})
export class ArcticonsFreezerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
