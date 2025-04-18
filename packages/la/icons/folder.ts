import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFolderIcon],svg[la-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V15.437l1.719-1.718l.281-.313V3zm2 2h14v8.406l.281.313L24 15.438V27H8zm16 0h2v7.563l-1 1l-1-1z"></svg:path>`,
})
export class LaFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
