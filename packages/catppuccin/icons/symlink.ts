import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSymlinkIcon],svg[catppuccin-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M15.5 6.5v6a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2m0-9c0-1.1.9-2 2-2h4.01m-.01 0l5 5h-4a1 1 0 0 1-1-1z"></svg:path><svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M.5 14.503V10.79c0-1.539 1.175-2.786 2.625-2.786H7"></svg:path><svg:path fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L7.125 8L4.5 5.5"></svg:path>`,
})
export class CatppuccinSymlinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
