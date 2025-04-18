import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderClientIcon],svg[catppuccin-folder-client-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8aadf4" d="M15.5 15.5h-7m.8-7h5.4a.8.8 0 0 1 .8.8v3.4a.8.8 0 0 1-.8.8H9.3a.8.8 0 0 1-.8-.8V9.3a.8.8 0 0 1 .8-.8"></svg:path></svg:g>`,
})
export class CatppuccinFolderClientIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
