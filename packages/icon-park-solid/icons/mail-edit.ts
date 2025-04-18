import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMailEditIcon],svg[icon-park-solid-mail-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H4v30h20"></svg:path><svg:path fill="currentColor" d="m35 39l8-7l-4-4l-8 7v4z"></svg:path><svg:path d="m4 9l20 15L44 9"></svg:path></svg:g>`,
})
export class IconParkSolidMailEditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
