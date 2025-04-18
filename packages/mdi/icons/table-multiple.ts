import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableMultipleIcon],svg[mdi-table-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h14a2 2 0 0 1 2 2v12c0 1.11-.89 2-2 2H7a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m0 4v4h6V6zm8 0v4h6V6zm-8 6v4h6v-4zm8 0v4h6v-4zM3 20V6H1v14c0 1.11.89 2 2 2h16v-2z"></svg:path>`,
})
export class MdiTableMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
