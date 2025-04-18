import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSkypeIcon],svg[arcticons-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.71 30.64a4.76 4.76 0 0 0 4.16 1.86h2.52a4.24 4.24 0 0 0 4.24-4.25h0A4.24 4.24 0 0 0 25.39 24h-2.78a4.24 4.24 0 0 1-4.24-4.25h0a4.24 4.24 0 0 1 4.24-4.25h2.52a4.76 4.76 0 0 1 4.16 1.86"></svg:path><svg:circle cx="24" cy="24" r="17.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.43 6.81A9.75 9.75 0 0 0 6.62 20.16m20.95 21.03a9.75 9.75 0 0 0 13.62-13.62"></svg:path>`,
})
export class ArcticonsSkypeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
