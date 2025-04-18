import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCopyOneIcon],svg[icon-park-copy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M13 38H41V16H30V4H13V38Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M30 4L41 16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M7 20V44H28"></svg:path><svg:path stroke="#fff" d="M19 20H23"></svg:path><svg:path stroke="#fff" d="M19 28H31"></svg:path></svg:g>`,
})
export class IconParkCopyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
