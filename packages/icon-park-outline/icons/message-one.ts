import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMessageOneIcon],svg[icon-park-outline-message-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M4 6h40v30H29l-5 5l-5-5H4z"></svg:path><svg:path d="M23 21h2.003m7.998 0H35m-21.999 0H15"></svg:path></svg:g>`,
})
export class IconParkOutlineMessageOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
