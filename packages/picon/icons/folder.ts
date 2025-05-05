import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFolderIcon],svg[picon-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 7V1h3l1 1h4v5"></svg:path>`,
})
export class PiconFolderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
