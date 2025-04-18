import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderSvgIcon],svg[catppuccin-folder-svg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#f5a97f" stroke-linecap="square" d="M11.5 8.5v6m0-6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm0 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm2.598-2.5l-5.196-3m5.196 3a.5.5 0 1 0 .866.5a.5.5 0 0 0-.866-.5ZM8.036 9.5a.5.5 0 1 0 .866.5a.5.5 0 0 0-.866-.5Zm6.062.5l-5.196 3m5.196-3a.5.5 0 1 0 .866-.5a.5.5 0 0 0-.866.5Zm-6.062 3.5a.5.5 0 1 0 .866-.5a.5.5 0 0 0-.866.5Z"></svg:path></svg:g>`,
})
export class CatppuccinFolderSvgIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
