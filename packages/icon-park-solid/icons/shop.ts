import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShopIcon],svg[icon-park-solid-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M4 12h40v8l-1.398.84a7 7 0 0 1-7.203 0L34 20l-1.398.84a7 7 0 0 1-7.203 0L24 20l-1.398.84a7 7 0 0 1-7.203 0L14 20l-1.399.84a7 7 0 0 1-7.202 0L4 20z"></svg:path><svg:path d="M8 22.489V44h32V22M8 11.822V4h32v8"></svg:path><svg:path fill="currentColor" d="M19 32h10v12H19z"></svg:path></svg:g>`,
})
export class IconParkSolidShopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
