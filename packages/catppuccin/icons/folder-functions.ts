import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderFunctionsIcon],svg[catppuccin-folder-functions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8aadf4" d="M7 14.75c0 .583.417.75 1 .75s.556-1.556.945-3.5c.388-1.945.472-3.5 1.055-3.5s1 .167 1 .75M7.778 11.5h2.333m5.389 2H15c-1.5 0-1.818-3-3-3h-.5m0 3h.5c1.5 0 1.818-3 3-3h.5"></svg:path></svg:g>`,
})
export class CatppuccinFolderFunctionsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
