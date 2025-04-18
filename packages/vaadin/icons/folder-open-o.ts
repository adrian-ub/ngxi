import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderOpenOIcon],svg[vaadin-folder-open-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4H7L6 2H2L1 4H0v11h14l2-9zm.9 1l-1.6 7l-11.9-.1L3.7 7zM1 5h.6l1-2h2.6l1.2 2H13v1H3l-2 5.9z"></svg:path>`,
})
export class VaadinFolderOpenOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
