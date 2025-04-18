import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShuffleOneIcon],svg[icon-park-outline-shuffle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="m40 33l4 4l-4 4m0-34l4 4l-4 4"></svg:path><svg:path d="M44 11h-7c-7.18 0-13 5.82-13 13s5.82 13 13 13h7M4 37h7c7.18 0 13-5.82 13-13s-5.82-13-13-13H4"></svg:path></svg:g>`,
})
export class IconParkOutlineShuffleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
