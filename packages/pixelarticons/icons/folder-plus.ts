import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsFolderPlusIcon],svg[pixelarticons-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h8v2h10v14H2V4zm16 4H10V6H4v12h16zm-6 2h2v2h2v2h-2v2h-2v-2h-2v-2h2z"></svg:path>`,
})
export class PixelarticonsFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
