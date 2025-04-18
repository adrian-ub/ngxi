import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGoodIcon],svg[icon-park-solid-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8.006 19.197C12.443 10.325 22 7 28.506 4.197c2.958-1.274 3.69 3.526 2.5 6.5c-1 2.5-3 5.303-3 5.303h8.5a3.5 3.5 0 1 1 0 7h2a3.5 3.5 0 1 1 0 7h-4a3.5 3.5 0 1 1 0 7h-3a3.5 3.5 0 0 1 .002 7H19.006c-3.5 0-8-1.803-11-6.803c-2.875-4.793-3-12 0-18"></svg:path>`,
})
export class IconParkSolidGoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
