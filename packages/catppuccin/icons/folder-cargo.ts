import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderCargoIcon],svg[catppuccin-folder-cargo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2c-.83 0-1.5-.67-1.5-1.5V3.5c0-.55.45-1 1-1h5c.55 0 1 .45 1 1v1"></svg:path><svg:path stroke="#f5a97f" stroke-width=".571" d="M8.286 11.429v2.285l3.714 2l3.714-2V9.143l-2-.857L10 10v.571ZM12 9.143L14 10v4.571M8.286 11.43l3.714 2l3.714-2M10 10l2 1.143l3.714-2M10 10.57v4m2-3.428v4.286"></svg:path></svg:g>`,
})
export class CatppuccinFolderCargoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
