import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderContentIcon],svg[catppuccin-folder-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path fill="none" stroke="#91d7e3" stroke-linecap="round" stroke-linejoin="round" d="M9.038 8.5h5.924a.54.54 0 0 1 .538.538v5.385a1.077 1.077 0 0 1-1.077 1.077H9.577A1.077 1.077 0 0 1 8.5 14.423V9.038a.54.54 0 0 1 .538-.538M8.5 12h7M12 13.5"></svg:path>`,
})
export class CatppuccinFolderContentIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
