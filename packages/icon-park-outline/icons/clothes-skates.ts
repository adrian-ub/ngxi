import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesSkatesIcon],svg[icon-park-outline-clothes-skates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 4H8c-1.886 0-2.828 0-3.414.586S4 6.114 4 8v32c0 1.886 0 2.828.586 3.414S6.114 44 8 44h4l4-4l4 4h20c1.886 0 2.828 0 3.414-.586S44 41.886 44 40v-7.525c0-4.992 0-7.488-1.48-9.183c-1.48-1.696-3.953-2.033-8.899-2.707l-1.242-.17c-4.946-.674-7.42-1.011-8.9-2.707C22 16.013 22 13.518 22 8.525V8c0-1.886 0-2.828-.586-3.414S19.886 4 18 4m26 30H4m0-22.5h18"></svg:path><svg:circle cx="15" cy="23" r="3"></svg:circle></svg:g>`,
})
export class IconParkOutlineClothesSkatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
