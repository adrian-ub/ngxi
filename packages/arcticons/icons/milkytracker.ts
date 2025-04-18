import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMilkytrackerIcon],svg[arcticons-milkytracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.66 20.54v16l13.3 7l13.38-7V21l-6.25-8l-13.65-6.6ZM24 43.5v-16"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.66 20.54L24 27.47L37.34 21M24 27.47L31.09 13m6.25 8l-7.62-5.22M31.09 13v-1.8L17.44 4.5v1.9"></svg:path>`,
})
export class ArcticonsMilkytrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
