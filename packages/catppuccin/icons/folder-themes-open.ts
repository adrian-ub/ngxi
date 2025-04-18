import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderThemesOpenIcon],svg[catppuccin-folder-themes-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"><svg:path stroke="#f4dbd6" d="M12 21a9 9 0 0 1 0-18c4.97 0 9 3.582 9 8c0 1.06-.474 2.078-1.318 2.828S17.693 15 16.5 15H14a2 2 0 0 0-1 3.75A1.3 1.3 0 0 1 12 21" transform="matrix(.41667 0 0 .4167 6.75 6.747)"></svg:path><svg:path stroke="#ed8796" d="M7.5 10.5c0 1.333 2 1.333 2 0s-2-1.333-2 0" transform="matrix(.41667 0 0 .4167 6.75 6.747)"></svg:path><svg:path stroke="#a6da95" d="M11.5 7.5c0 1.333 2 1.333 2 0s-2-1.333-2 0" transform="matrix(.41667 0 0 .4167 6.75 6.747)"></svg:path><svg:path stroke="#8aadf4" d="M15.5 10.5c0 1.333 2 1.333 2 0s-2-1.333-2 0" transform="matrix(.41667 0 0 .4167 6.75 6.747)"></svg:path></svg:g>`,
})
export class CatppuccinFolderThemesOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
