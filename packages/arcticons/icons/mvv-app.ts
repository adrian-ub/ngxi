import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMvvAppIcon],svg[arcticons-mvv-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 29.124V18.865l5.135 10.27l5.135-10.254v10.254m9.372-10.27l-3.402 10.27l-3.402-10.27m9.444 0l3.402 10.27s2.585-7.692 3.402-10.27a27.24 27.24 0 0 1 9.782-13.596m-8.292 3.088A18.74 18.74 0 0 0 7.31 17.2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.827 31.998a18.734 18.734 0 1 0 32.15-18.934"></svg:path>`,
})
export class ArcticonsMvvAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
