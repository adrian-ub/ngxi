import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderFastlaneOpenIcon],svg[catppuccin-folder-fastlane-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m1.87 8l.7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round" d="M9.25 15.5L8 11.5"></svg:path><svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M13.75 15.5h-4.5"></svg:path><svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="m15 11.5l-1.25 4"></svg:path><svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="m8 11.5l3.5-3l3.5 3"></svg:path><svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="m8 11.5l3.5-3"></svg:path>`,
})
export class CatppuccinFolderFastlaneOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
