import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkImageFilesIcon],svg[icon-park-image-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:circle cx="18" cy="17" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path fill="#43CCF8" stroke="#fff" d="M15 28V37H33V21L23.4894 31.5L15 28Z"></svg:path></svg:g>`,
})
export class IconParkImageFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
