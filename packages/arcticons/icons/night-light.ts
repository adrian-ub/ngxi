import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNightLightIcon],svg[arcticons-night-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.848 29.195a13.711 13.711 0 1 1 16.156.044"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.004 29.24v6.622l-16.187-.018l.04-6.661m3.867-1.966a9.738 9.738 0 1 1 8.593-.015"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.316 27.202l.001 4.96h-8.523l.01-4.884"></svg:path><svg:rect width="11.937" height="3.432" x="18.032" y="40.068" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".249"></svg:rect>`,
})
export class ArcticonsNightLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
