import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrobreakerIcon],svg[arcticons-microbreaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.285" cy="31.679" r="8.784" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.483 23.089l-2.111-5.951l14.915-1.364l2.488 7.032l2.714 7.657l-7.438.685m2.235-15.378l-14.917 1.366l12.015-8.235L37.3 7.536z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.486 30.46L42.5 22.226l-5.2-14.69l-12.014 8.234zm-9.378-4.31a2.45 2.45 0 0 0 1.753-2.585a2.44 2.44 0 0 0-2.666-2.196a2.436 2.436 0 0 0-2.206 2.354m4.849-.401l4.939-.516m12.203-7.7l-12.203 7.7"></svg:path>`,
})
export class ArcticonsMicrobreakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
