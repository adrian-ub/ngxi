import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLastLauncherIcon],svg[arcticons-last-launcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="15.713" r="3.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.853 36.75l.437-1.695l4.199 2.99l3.39-10.767l-2.244-2.094C33.482 15.164 31.538 8.784 24 3.5c-7.538 5.284-9.482 11.665-8.635 21.684l-2.243 2.094l3.39 10.767l4.198-2.99l.438 1.694zm-.415 2.169L24 44.5l-2.438-5.581z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.719 18.006c.299 5.957-.698 10.02-2.692 13.709"></svg:path>`,
})
export class ArcticonsLastLauncherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
