import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderLayoutsIcon],svg[catppuccin-folder-layouts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8aadf4" d="M9 8.5h6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5m-.5 2h7m-5 .5v4"></svg:path></svg:g>`,
})
export class CatppuccinFolderLayoutsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
