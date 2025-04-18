import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderDatabaseOpenIcon],svg[catppuccin-folder-database-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#eed49f" d="M8.5 9.5q1 1 3.5 1t3.5-1m-7 2.5q1 1 3.5 1t3.5-1m-7 2.5v-5q1-1 3.5-1t3.5 1v5q-1 1-3.5 1t-3.5-1"></svg:path></svg:g>`,
})
export class CatppuccinFolderDatabaseOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
