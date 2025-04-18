import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoDoorIcon],svg[noto-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#B06542" d="m33.28 123.87l61.43.13c1.22 0 2.2-.89 2.2-1.99V6.12c0-1.1-.98-1.99-2.19-1.99L33.29 4c-1.22 0-2.2.89-2.2 1.99v115.88c0 1.1.98 2 2.19 2"></svg:path><svg:path fill="#874D36" d="M78.72 20.72v30.32H49.28V20.72zm4.91-5H44.37v40.32h39.26z"></svg:path><svg:path fill="#C87D5E" d="m83.63 15.9l-5.1 4.82h.19v30.32H49.65l-5.28 5h39.26z"></svg:path><svg:path fill="#874D36" d="M78.72 78.96v28.32H49.28V78.96zm4.91-5H44.37v38.32h39.26z"></svg:path><svg:path fill="#C87D5E" d="m83.63 74.14l-5.1 4.82h.19v28.32H49.65l-5.28 5h39.26z"></svg:path><svg:circle cx="44.18" cy="66" r="5.25" fill="#874D36"></svg:circle><svg:circle cx="42.14" cy="64.45" r="5.25" fill="#BDBDBD"></svg:circle><svg:path fill="#EEE" d="M43.38 61.11c.13.65-.25.97-.79 1.36s-1.21.7-1.7 1.53c-.35.59-.46 1.37-1.03 1.76c-.56.38-1.2.31-1.5-.36c-.43-.95-.44-2.6.77-3.95c1.16-1.29 3.93-1.98 4.25-.34"></svg:path>`,
})
export class NotoDoorIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
