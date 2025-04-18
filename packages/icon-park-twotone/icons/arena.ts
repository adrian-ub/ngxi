import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneArenaIcon],svg[icon-park-twotone-arena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTArena0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M44 26L24 36L4 26l20-10z"></svg:path><svg:path d="m24 7l20 10l-20 10L4 17z"></svg:path><svg:path fill="#555" stroke-linecap="round" d="M44 26v8L24 44L4 34v-8l20 10z"></svg:path><svg:path stroke-linecap="round" d="M44 14v12M4 26V14m20 22V24m0-8V4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTArena0)"></svg:path>`,
})
export class IconParkTwotoneArenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
