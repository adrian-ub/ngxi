import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderAssetsOpenIcon],svg[catppuccin-folder-assets-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m1.87 8l.7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24L15.12 7M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linejoin="round" d="M12.923 11.904H7.5L10.21 7Z"></svg:path><svg:path fill="none" stroke="#eed49f" stroke-linejoin="round" d="M11.662 9.641a2.569 2.596 0 1 1-1.308 2.263"></svg:path>`,
})
export class CatppuccinFolderAssetsOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
