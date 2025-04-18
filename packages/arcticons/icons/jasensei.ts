import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJasenseiIcon],svg[arcticons-jasensei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.173 13.827v15.26a5.1 5.1 0 0 1-5.086 5.086h0A5.1 5.1 0 0 1 11 29.087v-1.78m26 6.866l-6.613-20.346l-6.867 20.346m2.289-6.867h8.902"></svg:path>`,
})
export class ArcticonsJasenseiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
