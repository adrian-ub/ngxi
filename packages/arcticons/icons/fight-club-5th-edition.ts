import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFightClub5thEditionIcon],svg[arcticons-fight-club-5th-edition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30 10l-15.1 1.8l-6 14m30.2-3.6L30 10M18 38l15.1-1.8l6-14M8.9 25.8L18 38"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m39.1 22.2l-11.4-6.8l-12.8-3.6l-.3 13.3L18 38m0 0l11.6-6.4l9.5-9.4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.6 31.6l-15-6.5l13.1-9.7zM8.9 25.8l5.7-.7m13.1-9.7L30 10m3.1 26.2l-3.5-4.6"></svg:path>`,
})
export class ArcticonsFightClub5thEditionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
