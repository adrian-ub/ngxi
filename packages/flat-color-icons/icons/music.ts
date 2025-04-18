import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsMusicIcon],svg[flat-color-icons-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#E91E63"><svg:circle cx="19" cy="33" r="9"></svg:circle><svg:path d="M24 6v27h4V14l11 3v-7z"></svg:path></svg:g>`,
})
export class FlatColorIconsMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
