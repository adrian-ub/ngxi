import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMgIcon],svg[arcticons-mg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.663 5.5L42.5 16.337v15.326L31.663 42.5H16.337L5.5 31.663V16.337L16.337 5.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.257 36.993V10.925h-2.453L16.22 23.959l-3.727-7.196l-1.77 1.657v11.035m26.556-9.137v-1.773l-7.495-7.62h-4.08v26.068H29.7l7.579-7.537V23.96h-4.626"></svg:path>`,
})
export class ArcticonsMgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
