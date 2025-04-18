import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderStylesOpenIcon],svg[catppuccin-folder-styles-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#8aadf4" d="M8.5 15.5v-1.555a1.556 1.556 0 1 1 1.556 1.555zm7-7a6.22 6.22 0 0 0-4.978 3.967M15.5 8.5a6.22 6.22 0 0 1-3.967 4.978m-.077-2.645a3.5 3.5 0 0 1 1.71 1.711"></svg:path></svg:g>`,
})
export class CatppuccinFolderStylesOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
