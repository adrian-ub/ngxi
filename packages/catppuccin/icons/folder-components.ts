import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderComponentsIcon],svg[catppuccin-folder-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#a6da95" d="m9.485 9.516l3.968 3.968m-3.968 0l3.968-3.968m-1.634-1.874l3.507 3.507a.496.496 0 0 1 0 .702l-3.507 3.507a.496.496 0 0 1-.701 0L7.61 11.85a.496.496 0 0 1 0-.702l3.507-3.507a.496.496 0 0 1 .701 0z"></svg:path></svg:g>`,
})
export class CatppuccinFolderComponentsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
