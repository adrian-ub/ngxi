import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextareaIcon],svg[icon-park-textarea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 4C23 4 24 10 24 12C24 14 24 34 24 36C24 38 23 44 16 44"></svg:path><svg:path d="M32 4C26 4 24 10 24 12C24 14 24 34 24 36C24 38 25 44 32 44"></svg:path><svg:path d="M17 24L31 24"></svg:path></svg:g>`,
})
export class IconParkTextareaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
