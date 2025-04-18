import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBehanceIcon],svg[icon-park-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 24C17 24 20 21.2 20 17C20 12.8 17 10 12 10C7 10 4 10 4 10V24H12Z" clip-rule="evenodd"></svg:path><svg:path d="M13.0312 40C18.5368 40 22 37 22 32C22 27 18.5368 24 13.0312 24H4V40H13.0312Z" clip-rule="evenodd"></svg:path><svg:path d="M29 31H44C44 27 42 22 36 22C31 22 28 26 28 31C28 36 31 40 36 40C41 40 43 37 43 37"></svg:path><svg:path d="M42 15H30"></svg:path></svg:g>`,
})
export class IconParkBehanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
