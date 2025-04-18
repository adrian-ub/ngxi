import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFlipVerticallyIcon],svg[icon-park-flip-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M42 24L6 24"></svg:path><svg:path fill="#2F88FF" d="M14 4L36 16H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M14 44V32H36L14 44Z"></svg:path></svg:g>`,
})
export class IconParkFlipVerticallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
