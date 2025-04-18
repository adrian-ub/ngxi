import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMusicOneIcon],svg[icon-park-outline-music-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6v29"></svg:path><svg:path d="M10 36.04A5.04 5.04 0 0 1 15.04 31H24v5.96A5.04 5.04 0 0 1 18.96 42h-3.92A5.04 5.04 0 0 1 10 36.96z"></svg:path><svg:path stroke-linecap="round" d="m24 14.066l12.883 3.056V9.013L24 6z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineMusicOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
