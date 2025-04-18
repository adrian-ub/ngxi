import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderAppIcon],svg[catppuccin-folder-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8087a2" d="M11.5 7v1.5m.5 2l2.5 5m-3.5-5l-2.5 5m-.708-4.497a4 4 0 0 0 5.495 2.077"></svg:path><svg:circle cx="11.5" cy="9.5" r="1" stroke="#8aadf4"></svg:circle></svg:g>`,
})
export class CatppuccinFolderAppIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
