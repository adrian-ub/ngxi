import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCactusIcon],svg[icon-park-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 43L40 43"></svg:path><svg:path stroke-linecap="round" d="M6 16C6 21.5 6.5 30 16 30"></svg:path><svg:path stroke-linecap="round" d="M42 14C42 19 42 34 32 34"></svg:path><svg:path fill="#2F88FF" d="M24 5C19.5817 5 16 8.58172 16 13V43H32V13C32 8.58172 28.4183 5 24 5Z"></svg:path></svg:g>`,
})
export class IconParkCactusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
