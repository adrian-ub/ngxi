import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderIcon],svg[vaadin-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 15H0V4h1l1-2h4l1 2h9z"></svg:path>`,
})
export class VaadinFolderIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
