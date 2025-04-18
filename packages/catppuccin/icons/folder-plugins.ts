import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderPluginsIcon],svg[catppuccin-folder-plugins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8aadf4" d="m8.518 15.5l1.015-1.016m3.969-5.968l-2 1.99m3.998.01l-1.998 2m-2.97-2.625l3.595 3.594l-.899.898a2.542 2.542 0 1 1-3.594-3.594Z"></svg:path></svg:g>`,
})
export class CatppuccinFolderPluginsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
