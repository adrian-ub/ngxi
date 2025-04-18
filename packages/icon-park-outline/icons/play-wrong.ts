import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePlayWrongIcon],svg[icon-park-outline-play-wrong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-11 9l8 8m0-8l-8 8"></svg:path><svg:path d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"></svg:path></svg:g>`,
})
export class IconParkOutlinePlayWrongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
