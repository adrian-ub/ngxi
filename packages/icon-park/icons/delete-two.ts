import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteTwoIcon],svg[icon-park-delete-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M14 11L4 24L14 37H44V11H14Z"></svg:path><svg:path stroke="#fff" d="M21 19L31 29"></svg:path><svg:path stroke="#fff" d="M31 19L21 29"></svg:path></svg:g>`,
})
export class IconParkDeleteTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
