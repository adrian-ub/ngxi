import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderAdminOpenIcon],svg[catppuccin-folder-admin-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.87 8l.7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24L15.12 7M6.5 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8aadf4" d="M15.5 9.25v-.58L12 7.5L8.5 8.67v2.62c0 2.12 1.2 3.64 3.5 4.21m2.5-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class CatppuccinFolderAdminOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
