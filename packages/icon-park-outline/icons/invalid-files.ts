import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineInvalidFilesIcon],svg[icon-park-outline-invalid-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 44V4h23l9 10.5V44z"></svg:path><svg:path d="M34 25c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10a9.97 9.97 0 0 1 6.865 2.729A9.97 9.97 0 0 1 34 25m-17-7l14 14"></svg:path><svg:path d="M34 25c0 5.523-4.477 10-10 10M14 25c0-5.523 4.477-10 10-10"></svg:path></svg:g>`,
})
export class IconParkOutlineInvalidFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
