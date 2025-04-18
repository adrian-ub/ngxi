import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderApiIcon],svg[catppuccin-folder-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#eed49f" d="M11.5 13.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m6 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 6a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-6 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m4-4.5L14 9.5M12.5 13l1.5 1.5m-5 0l1.5-1.5M9 9.5l1.5 1.5"></svg:path></svg:g>`,
})
export class CatppuccinFolderApiIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
