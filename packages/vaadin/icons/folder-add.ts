import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinFolderAddIcon],svg[vaadin-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6V4H7L6 2H2L1 4H0v11h14v-1H1V5h.62l1-2h2.57l1.19 2H13v1z"></svg:path><svg:path fill="currentColor" d="M14 7h-2v2h-2v2h2v2h2v-2h2V9h-2z"></svg:path>`,
})
export class VaadinFolderAddIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
