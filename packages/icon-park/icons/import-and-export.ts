import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkImportAndExportIcon],svg[icon-park-import-and-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.99"><svg:path d="M14 25.9999L5 34.9999L14 43.9999"></svg:path><svg:path d="M5 35.0083H22.5"></svg:path><svg:path d="M34.0005 18L43.0005 27L34.0005 36"></svg:path><svg:path d="M43 27.0084H25.5"></svg:path><svg:path d="M4.5 24V7.5L43.5 7.5V15"></svg:path></svg:g>`,
})
export class IconParkImportAndExportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
