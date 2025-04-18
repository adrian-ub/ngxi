import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderScriptsIcon],svg[catppuccin-folder-scripts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#c6a0f6" d="M8.5 13.5V9.75C8.5 9 9 8.5 9.75 8.5h3.75v5.75c0 .75-.5 1.25-1.25 1.25H8.5a1 1 0 0 1 0-2h3a1 1 0 0 0 0 2m2-5h1a1 1 0 0 0 0-2h-1"></svg:path></svg:g>`,
})
export class CatppuccinFolderScriptsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
