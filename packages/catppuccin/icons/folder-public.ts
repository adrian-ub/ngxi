import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderPublicIcon],svg[catppuccin-folder-public-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#7dc4e4" d="M8.5 12h7M12 15.5c-1.933 0-3.5-1.5-3.5-3.5s1.567-3.5 3.5-3.5c2 0 3.5 1.5 3.5 3.5S14 15.5 12 15.5M11.556 9c-1.379 2.01-1.448 4.01.087 6.34M12.454 9c1.361 1.98 1.45 3.98-.062 6.34"></svg:path></svg:g>`,
})
export class CatppuccinFolderPublicIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
