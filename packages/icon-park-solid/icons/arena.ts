import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidArenaIcon],svg[icon-park-solid-arena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M44 26L24 36L4 26l20-10z"></svg:path><svg:path d="m24 7l20 10l-20 10L4 17z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" d="M44 26v8L24 44L4 34v-8l20 10z"></svg:path><svg:path stroke-linecap="round" d="M44 14v12M4 26V14m20 22V24m0-8V4"></svg:path></svg:g>`,
})
export class IconParkSolidArenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
