import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBarberPoleIcon],svg[twemoji-barber-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="6" r="6" fill="#CCD6DD"></svg:circle><svg:path fill="#FFF" d="M11 12h14v21H11z"></svg:path><svg:path fill="#DD2E44" d="M11 28.487L20.251 33H25v-2.134l-14-6.83z"></svg:path><svg:path fill="#55ACEE" d="m11 19.585l14 6.83v-4.45l-14-6.831z"></svg:path><svg:path fill="#DD2E44" d="M13.697 12L25 17.514V12z"></svg:path><svg:path fill="#99AAB5" d="M27 11a2 2 0 0 1-2 2H11a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2m0 23a2 2 0 0 1-2 2H11a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2"></svg:path>`,
})
export class TwemojiBarberPoleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
