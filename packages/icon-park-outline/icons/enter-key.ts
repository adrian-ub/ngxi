import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEnterKeyIcon],svg[icon-park-outline-enter-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 44V4H24v16H4v24z"></svg:path><svg:path d="m21 28l-4 4l4 4"></svg:path><svg:path d="M34 23v9H17"></svg:path></svg:g>`,
})
export class IconParkOutlineEnterKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
