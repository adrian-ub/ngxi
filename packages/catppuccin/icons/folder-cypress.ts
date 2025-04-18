import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderCypressIcon],svg[catppuccin-folder-cypress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#a6da95" d="M11 12.157a1.41 1.41 0 0 1-1.387.403c-.637-.168-1.091-.763-1.112-1.457s.396-1.32 1.022-1.53a1.41 1.41 0 0 1 1.476.374M14.5 12.5l-1.5-3m.5 6l2-6"></svg:path></svg:g>`,
})
export class CatppuccinFolderCypressIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
