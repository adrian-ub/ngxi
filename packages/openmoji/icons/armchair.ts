import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiArmchairIcon],svg[openmoji-armchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#61b2e4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M52.167 42.285H19.833V24.13c0-7.831 6.349-14.18 14.18-14.18h4.1c7.762 0 14.054 6.292 14.054 14.054zM61 55.02h-8.833V28h3.783A5.05 5.05 0 0 1 61 33.05zM19.833 42.285h32.333v12.736H19.833z"></svg:path><svg:path d="M52.167 42.285H19.833v-3.35a3.913 3.913 0 0 1 3.914-3.914H47.43a4.737 4.737 0 0 1 4.737 4.737z"></svg:path><svg:path d="M11 55.02h8.833V28H16.05A5.05 5.05 0 0 0 11 33.05z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M52.167 42.285H19.833V24.13c0-7.831 6.349-14.18 14.18-14.18h4.1c7.762 0 14.054 6.292 14.054 14.054zM61 55.02h-8.833V28h3.783A5.05 5.05 0 0 1 61 33.05zM19.833 42.285h32.333v12.736H19.833z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M52.167 42.285H19.833v-3.35a3.913 3.913 0 0 1 3.914-3.914H47.43a4.737 4.737 0 0 1 4.737 4.737z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11 55.02h8.833V28H16.05A5.05 5.05 0 0 0 11 33.05z"></svg:path><svg:circle cx="29.769" cy="18.709" r="1.167"></svg:circle><svg:circle cx="42.559" cy="18.709" r="1.167"></svg:circle><svg:circle cx="29.769" cy="27.438" r="1.167"></svg:circle><svg:circle cx="42.559" cy="27.438" r="1.167"></svg:circle>`,
})
export class OpenmojiArmchairIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
