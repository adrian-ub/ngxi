import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderViewsIcon],svg[catppuccin-folder-views-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12A1.5 1.5 0 0 1 13.5 6v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#f5a97f" d="M14.692 8.5H9.308a.31.31 0 0 0-.307.336l.47 5.241c.01.128.1.235.223.27l2.303 1.153l2.308-1.153a.31.31 0 0 0 .225-.27L15 8.836a.31.31 0 0 0-.307-.336"></svg:path></svg:g>`,
})
export class CatppuccinFolderViewsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
