import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderMiddlewareOpenIcon],svg[catppuccin-folder-middleware-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="m1.875 8l.686-2.743a1 1 0 0 1 .97-.757h10.938a1 1 0 0 1 .97 1.243l-.315 1.26M6 13.5H2.004A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#a6da95" d="M15.5 13.5v1.2a.8.8 0 0 1-.8.8h-4.4a.8.8 0 0 1-.8-.8v-1.2H9a1 1 0 0 1 0-2h.5v-1.2a.8.8 0 0 1 .8-.8h1.2V9a1 1 0 0 1 2 0v.5h1.2a.8.8 0 0 1 .8.8v1.2H15a1 1 0 0 0 0 2z"></svg:path></svg:g>`,
})
export class CatppuccinFolderMiddlewareOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
