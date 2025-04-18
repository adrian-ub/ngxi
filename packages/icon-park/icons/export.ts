import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkExportIcon],svg[icon-park-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 27C42 33 38 43 24 43C10 43 6 33 6 27"></svg:path><svg:path d="M24.0078 5.10059V33.0001"></svg:path><svg:path d="M12 17L24 5L36 17"></svg:path></svg:g>`,
})
export class IconParkExportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
