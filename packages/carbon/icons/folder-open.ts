import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFolderOpenIcon],svg[carbon-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-7.172l-3.414-3.414A2 2 0 0 0 16 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M8 26V14h8v6.17l-2.59-2.58L12 19l5 5l5-5l-1.41-1.41L18 20.17V14a2.003 2.003 0 0 0-2-2H8a2.003 2.003 0 0 0-2 2v12H4V6h12l4 4h8v2h-6v2h6v12Z"></svg:path>`,
})
export class CarbonFolderOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
