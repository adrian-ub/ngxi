import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderAssetsIcon],svg[catppuccin-folder-assets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linejoin="round" d="M12.923 11.904H7.5L10.212 7Z"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linejoin="round" d="M11.662 9.641a2.569 2.596 0 1 1-1.308 2.263"></svg:path>`,
})
export class CatppuccinFolderAssetsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
