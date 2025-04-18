import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkKeylineIcon],svg[icon-park-keyline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6H42V42H6V6Z"></svg:path><svg:path fill="#2F88FF" d="M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24Z"></svg:path><svg:path d="M4 4L44 44"></svg:path><svg:path d="M44 4L4 44"></svg:path></svg:g>`,
})
export class IconParkKeylineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
