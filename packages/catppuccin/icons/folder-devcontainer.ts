import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFolderDevcontainerIcon],svg[catppuccin-folder-devcontainer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M4.5 4.5H12c.83 0 1.5.67 1.5 1.5v.5m-7.5 7H2A1.5 1.5 0 0 1 .5 12V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v1"></svg:path><svg:path stroke="#91d7e3" d="M8.5 9.5V14l3.5 1.5l3.5-1.5V9.5L12 8Z"></svg:path><svg:path stroke="#91d7e3" d="m10.5 10.5l1.5.5l1.5-.5M12 11v2.5"></svg:path></svg:g>`,
})
export class CatppuccinFolderDevcontainerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
