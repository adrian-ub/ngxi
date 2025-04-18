import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFastDrawPreferencesIcon],svg[arcticons-fast-draw-preferences-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.638 14.327c-9.315 3.726-10.815 12.314-6.998 15.586S31.138 35.593 35 42.5c1.545-.182 5.272-2.908 5.272-2.908c-.5-6.316-8.634-25.265-8.634-25.265"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.095 20.407c-5.733-6.739-3.04-10.795-6.108-13.385s-7.191-1.09-7.191-1.09c2.897 1.67 5.248 3.34 2.726 5.964s-4.123.477-5.793-1.193c-.024 5.385 3.067 6.135 6.509 7.498s8.388 8.077 8.388 8.077"></svg:path>`,
})
export class ArcticonsFastDrawPreferencesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
