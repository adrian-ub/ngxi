import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpletextcryptIcon],svg[arcticons-simpletextcrypt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="34.27" cy="17.07" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="9.23" ry="9.12"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 33.6l6.52 6.45h.01l16.72-16.53m-16.2 8.58l3.76 3.72"></svg:path>`,
})
export class ArcticonsSimpletextcryptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
