import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsFolderMultipleIcon],svg[gridicons-folder-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2H4zm16 10H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2"></svg:path>`,
})
export class GridiconsFolderMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
