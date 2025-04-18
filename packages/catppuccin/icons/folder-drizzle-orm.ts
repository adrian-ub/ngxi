import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderDrizzleOrmIcon],svg[catppuccin-folder-drizzle-orm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#a6da95" d="M.027 11.07L1.74 7.641m-5.143 6l1.714-3.429m-3.43.857l1.715-3.429m-5.143 6l1.714-3.429" transform="matrix(.8418 0 0 .8401 14.11 4.099)"></svg:path><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2c-.83 0-1.5-.67-1.5-1.5V3.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"></svg:path></svg:g>`,
})
export class CatppuccinFolderDrizzleOrmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
