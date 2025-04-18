import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsVirtualboxAltIcon],svg[file-icons-virtualbox-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h511.308V0zm471.177 40.13v252.69h-58.513L338.266 69.666l-54.071 147.912l-50.92-147.163l-65.702 239.958l-41.128-131.31H40.131V40.13zM40.131 471.87V219.193h56.83l73.198 233.7l67.584-246.837l45.415 131.246l53.365-145.981l47.218 141.629h87.436v138.919z"></svg:path>`,
})
export class FileIconsVirtualboxAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
