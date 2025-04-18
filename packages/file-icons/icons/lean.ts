import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsLeanIcon],svg[file-icons-lean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M73.948 438.052h241.034V512H0V0h73.948z"></svg:path>`,
})
export class FileIconsLeanIcon {
  readonly viewBox = input("0 0 315 512")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
