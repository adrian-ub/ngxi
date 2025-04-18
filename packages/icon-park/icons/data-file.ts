import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDataFileIcon],svg[icon-park-data-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44V4H31L40 14.5V44H8Z"></svg:path><svg:rect width="6" height="7" x="15" y="28" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M14 35H34"></svg:path><svg:rect width="6" height="12" x="21" y="23" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="6" height="17" x="27" y="18" fill="#43CCF8" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkDataFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
