import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderAwsOpenIcon],svg[catppuccin-folder-aws-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.87 8l.7-2.74a1 1 0 0 1 .96-.76h10.94a1 1 0 0 1 .97 1.24l-.219.875M6 13.5H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:g stroke="#f5a97f"><svg:path d="M7.646 14c.824.92 2.022 1.5 3.354 1.5s2.53-.58 3.354-1.5"></svg:path><svg:path d="M12.5 13.5h2v2m-4.5-8h1.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1.75"></svg:path></svg:g></svg:g>`,
})
export class CatppuccinFolderAwsOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
