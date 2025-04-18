import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShuffleOneIcon],svg[icon-park-shuffle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 33L44 37L40 41"></svg:path><svg:path stroke-linejoin="round" d="M40 7L44 11L40 15"></svg:path><svg:path d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44"></svg:path><svg:path d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4"></svg:path></svg:g>`,
})
export class IconParkShuffleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
