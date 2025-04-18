import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8OpenedFolderIcon],svg[icons8-opened-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3v24.813l.78.156l12 2.5l1.22.25V28h6V15.437l1.72-1.718l.28-.314V3zm9.125 2H25v7.563l-1.72 1.718l-.28.314V26h-4v-8.906l-.28-.313L17 15.063V5.72l-.75-.19zM7 5.28l8 2v8.627l.28.313L17 17.937V28.28L7 26.188V5.282z"></svg:path>`,
})
export class Icons8OpenedFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
