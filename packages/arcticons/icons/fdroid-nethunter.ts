import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFdroidNethunterIcon],svg[arcticons-fdroid-nethunter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.6 29.4v8m-13.2 0v-8l5.3 8v-8m2.6 0v8m0-4h5.3"></svg:path><svg:circle cx="17" cy="15.3" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="31" cy="15.3" r="3.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.2 8.8h25.7a2.86 2.86 0 0 1 2.8 2.8V19a2.86 2.86 0 0 1-2.8 2.8H11.2A2.86 2.86 0 0 1 8.4 19v-7.4a2.734 2.734 0 0 1 2.8-2.8M5.5 5.9l3.7 3.7m2 15.2h25.7a2.86 2.86 0 0 1 2.8 2.8v11.7a2.86 2.86 0 0 1-2.8 2.8H11.2a2.86 2.86 0 0 1-2.8-2.8V27.6a2.734 2.734 0 0 1 2.8-2.8M42.5 5.9l-3.7 3.7"></svg:path>`,
})
export class ArcticonsFdroidNethunterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
