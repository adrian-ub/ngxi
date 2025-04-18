import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDongchediIcon],svg[arcticons-dongchedi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.707 39.706A18.54 18.54 0 0 1 5.5 26.82C5.5 16.59 13.783 8.294 24 8.294s18.5 8.295 18.5 18.527h0a18.54 18.54 0 0 1-5.207 12.885"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.707 29.521c5.03-1.83 11.543-2.843 18.293-2.843c6.748 0 13.26 1.012 18.29 2.842"></svg:path>`,
})
export class ArcticonsDongchediIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
