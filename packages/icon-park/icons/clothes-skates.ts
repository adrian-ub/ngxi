import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesSkatesIcon],svg[icon-park-clothes-skates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 4H8C6.11438 4 5.17157 4 4.58579 4.58579C4 5.17157 4 6.11438 4 8V40C4 41.8856 4 42.8284 4.58579 43.4142C5.17157 44 6.11438 44 8 44H12L16 40L20 44H40C41.8856 44 42.8284 44 43.4142 43.4142C44 42.8284 44 41.8856 44 40V32.4747C44 27.4829 44 24.987 42.5202 23.2917C41.0404 21.5964 38.5674 21.2592 33.6214 20.5847L32.3786 20.4153C27.4326 19.7408 24.9596 19.4036 23.4798 17.7083C22 16.013 22 13.5171 22 8.52531V8C22 6.11438 22 5.17157 21.4142 4.58579C20.8284 4 19.8856 4 18 4Z"></svg:path><svg:path d="M44 34H4"></svg:path><svg:path d="M4 11.5H22"></svg:path><svg:circle cx="15" cy="23" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkClothesSkatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
