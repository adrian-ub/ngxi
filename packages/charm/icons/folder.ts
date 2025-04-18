import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFolderIcon],svg[charm-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 2.75v10.5h12.5v-8.5h-6l-1.5-2z"></svg:path>`,
})
export class CharmFolderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
