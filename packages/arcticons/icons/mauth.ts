import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMauthIcon],svg[arcticons-mauth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.533 5.5l-5.16 5.774M16.235 5.525l5.16 5.723M19.744 36.23c-4.45 1.595-8.072 2.35-7.688-.954c1.443-7.912 6.607-13.53 11.844-17.763c7.403 4.543 11.537 13.897 12.096 18.098c.205 2.57-2.352 2.689-7.03.929"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.12 42.443c4.97.416 11-1.401 9.571-8.146c-1.83-6.722-6.433-17.2-16.79-21.76C15.566 16.934 8.866 23.07 7.128 35.226c-.461 6.57 4.963 7.223 10.113 7.193"></svg:path>`,
})
export class ArcticonsMauthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
