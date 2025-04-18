import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderWindowsIcon],svg[material-icon-theme-folder-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196f3" d="M12.667 6h-8A2.657 2.657 0 0 0 2 8.648v16.019a2.68 2.68 0 0 0 2.667 2.666H26a2.68 2.68 0 0 0 2.667-2.666V11.333A2.667 2.667 0 0 0 26 8.667H15.333z"></svg:path><svg:path fill="#bbdefb" d="M14 12h8v8h-8zm10 0h8v8h-8zm0 10h8v8h-8zm-10 0h8v8h-8z"></svg:path>`,
})
export class MaterialIconThemeFolderWindowsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
