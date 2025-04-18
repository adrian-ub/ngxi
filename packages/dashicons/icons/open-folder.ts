import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsOpenFolderIcon],svg[dashicons-open-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.5 6l-2-2H2l.7 9.5L4.2 6zM5 7L3 17h13l2-10z"></svg:path>`,
})
export class DashiconsOpenFolderIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
