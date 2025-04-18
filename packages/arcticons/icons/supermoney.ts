import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSupermoneyIcon],svg[arcticons-supermoney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 24H32.486h.764a9.25 9.25 0 0 1 0 18.5H5.5V24h10.014h-.764a9.25 9.25 0 1 1 0-18.5H42.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.475 14.454l7.071 7.071a1 1 0 0 1 0 1.414L22.94 33.546a1 1 0 0 1-1.414 0l-7.071-7.07a1 1 0 0 1 0-1.415l10.607-10.607a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class ArcticonsSupermoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
