import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFolderIcon],svg[ix-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.666H42.667V85.333H220.75L274.71 128h194.625zM85.334 384h341.333V170.666H259.875L205.917 128H85.334z"></svg:path>`,
})
export class IxFolderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
