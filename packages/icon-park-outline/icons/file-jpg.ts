import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFileJpgIcon],svg[icon-park-outline-file-jpg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M10 4h20l10 10v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 18H21m5 0v12"></svg:path><svg:path stroke-linecap="round" d="M18 30a4 4 0 0 0 8 0"></svg:path></svg:g>`,
})
export class IconParkOutlineFileJpgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
