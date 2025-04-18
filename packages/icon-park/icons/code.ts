import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCodeIcon],svg[icon-park-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 13L4 25.4322L16 37"></svg:path><svg:path stroke-linejoin="round" d="M32 13L44 25.4322L32 37"></svg:path><svg:path d="M28 4L21 44"></svg:path></svg:g>`,
})
export class IconParkCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
