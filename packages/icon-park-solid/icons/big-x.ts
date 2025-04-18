import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBigXIcon],svg[icon-park-solid-big-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 6h11L15 42H4z"></svg:path><svg:path d="M15 6H4l29 36h11z"></svg:path></svg:g>`,
})
export class IconParkSolidBigXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
