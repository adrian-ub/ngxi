import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderIntellijIcon],svg[catppuccin-folder-intellij-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#c6a0f6" d="m8.5 15.5l3.057.008"></svg:path><svg:path stroke="#ed8796" d="M10 8.5v4m-1-4h2m-2 4h2"></svg:path><svg:path stroke="#8aadf4" d="M14.5 8.5v3s0 1-1 1s-1-1-1-1"></svg:path></svg:g>`,
})
export class CatppuccinFolderIntellijIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
