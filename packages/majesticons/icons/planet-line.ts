import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsPlanetLineIcon],svg[majesticons-planet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.292 6A8.97 8.97 0 0 0 3 12c0 .687.077 1.357.223 2m2.069-8a9.003 9.003 0 0 1 15.485 4M5.292 6H12m8.777 4a9 9 0 0 1-15.485 8m15.485-8H15M3.223 14H13m-9.777 0a9 9 0 0 0 2.069 4m0 0H11m1-8h-2m6 4"></svg:path>`,
})
export class MajesticonsPlanetLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
