import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneContrastViewCircleIcon],svg[icon-park-twotone-contrast-view-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTContrastViewCircle0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20z" clip-rule="evenodd"></svg:path><svg:path fill="#555" d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20z"></svg:path><svg:path stroke-linecap="round" d="M24 36H9m15-8H5m19-8H5m19-8H9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTContrastViewCircle0)"></svg:path>`,
})
export class IconParkTwotoneContrastViewCircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
