import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidUtensilSpoonIcon],svg[fa-solid-utensil-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480.1 31.9c-55-55.1-164.9-34.5-227.8 28.5c-49.3 49.3-55.1 110-28.8 160.4L9 413.2c-11.6 10.5-12.1 28.5-1 39.5L59.3 504c11 11 29.1 10.5 39.5-1.1l192.4-214.4c50.4 26.3 111.1 20.5 160.4-28.8c63-62.9 83.6-172.8 28.5-227.8"></svg:path>`,
})
export class FaSolidUtensilSpoonIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
