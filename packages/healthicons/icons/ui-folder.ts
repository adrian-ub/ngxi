import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsUiFolderIcon],svg[healthicons-ui-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.712 10.555L27.154 15H39a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V12a3 3 0 0 1 3-3h13.083a3 3 0 0 1 2.629 1.555M8 12a1 1 0 0 1 1-1h13.083a1 1 0 0 1 .876.518L24.872 15H8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsUiFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
