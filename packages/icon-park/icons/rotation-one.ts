import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationOneIcon],svg[icon-park-rotation-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4V40H44"></svg:path><svg:path fill="#2F88FF" d="M28 40C28 28.9543 19.0457 20 8 20V40H28Z"></svg:path></svg:g>`,
})
export class IconParkRotationOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
