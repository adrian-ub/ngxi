import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidHomestayIcon],svg[icon-park-solid-homestay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 26c2.319.197 10 2 10 5s-4.135 1.989-6 2c-1.601-.136-6 0-6 3s7 5 14 6s18 1 18 1M8 20l6-6m14-8h10l4 4"></svg:path><svg:path fill="currentColor" d="m30 14l6 6H20l-6-6z"></svg:path><svg:path d="M42 22v-6M26 30v-4m6 8v-8"></svg:path></svg:g>`,
})
export class IconParkSolidHomestayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
