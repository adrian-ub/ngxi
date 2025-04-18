import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBigXIcon],svg[icon-park-big-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 6H44L15 42H4L33 6Z"></svg:path><svg:path d="M15 6H4L33 42H44L15 6Z"></svg:path></svg:g>`,
})
export class IconParkBigXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
