import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFreeQuranEducationIcon],svg[arcticons-free-quran-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.263h9.915m18.563 0H43.5m-6.073 10.301h5.988M4.577 36.037V22.564h13.302m11.076 9.566h14.287"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.736 19.028a10.736 10.736 0 1 1 0 7.344"></svg:path>`,
})
export class ArcticonsFreeQuranEducationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
