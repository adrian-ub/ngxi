import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderOpenIcon],svg[vaadin-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4H7L6 2H2L1 4H0v9.5L3 6z"></svg:path><svg:path fill="currentColor" d="M3.7 7L.5 15h12.8l2.5-8z"></svg:path>`,
})
export class VaadinFolderOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
