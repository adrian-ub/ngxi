import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwimsuitIcon],svg[icon-park-solid-swimsuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4v7m20-7v7M12 31h24v5c-3 0-10 3-10 8h-5c0-5-6-8-9-8z"></svg:path><svg:circle cx="14" cy="18" r="7" fill="currentColor"></svg:circle><svg:circle cx="34" cy="18" r="7" fill="currentColor"></svg:circle><svg:path d="M21 18h6"></svg:path></svg:g>`,
})
export class IconParkSolidSwimsuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
