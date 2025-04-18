import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileImportIcon],svg[la-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4v24h20v-9h-2v7H8V6h16v7h2V4zm11.5 7l-4.313 4.281L12.5 16l.688.719L17.5 21l1.406-1.406L16.313 17H28v-2H16.312l2.594-2.594z"></svg:path>`,
})
export class LaFileImportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
