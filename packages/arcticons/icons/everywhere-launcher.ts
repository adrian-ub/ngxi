import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEverywhereLauncherIcon],svg[arcticons-everywhere-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:path d="M2.586 22.834H26.73v2.945H2.627m1.812-10.095h22.294v2.945H3.363M9.886 7.922h16.836v2.944H7.105M3.72 30.94h23.002v2.945H4.972M8.64 38.73h18.087v2.945H11.98m16.8-33.763v2.957m2.07-2.96v2.957m-2.066 4.817v2.958m2.069-2.961v2.958m-2.076 4.203v2.957m2.07-2.959v2.957m-2.059 5.138v2.958m2.07-2.96v2.957m-2.074 4.846v2.958m2.069-2.96v2.957"></svg:path></svg:g>`,
})
export class ArcticonsEverywhereLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
