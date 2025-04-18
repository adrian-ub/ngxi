import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderTurboIcon],svg[catppuccin-folder-turbo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#cad3f5" stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5H12c.8 0 1.5.7 1.5 1.5v.5m-7.5 7H2c-.8 0-1.5-.7-1.5-1.5V3.5c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v1"></svg:path><svg:circle cx="11.5" cy="11.5" r="2" stroke="#cad3f5"></svg:circle><svg:path stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M12.5 7.6a4 4 0 0 1 3 3.7"></svg:path><svg:path stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M15.5 11.5a4 4 0 0 1-.7 2.3"></svg:path><svg:path stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round" d="M10.5 15.4a4 4 0 0 1-1.4-.7m-1.3-1.6a4 4 0 0 1-.3-1.6m7.2 2.5a4 4 0 0 1-2.2 1.4"></svg:path></svg:g>`,
})
export class CatppuccinFolderTurboIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
