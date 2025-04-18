import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHardDrive3FillIcon],svg[ri-hard-drive-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2a1 1 0 0 0-.992.876l-1.5 12A1 1 0 0 0 3 15v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6q0-.062-.008-.124l-1.5-12A1 1 0 0 0 18.5 2zM5 16h14v4H5zm10 1h2v2h-2zm-2 0h-2v2h2z"></svg:path>`,
})
export class RiHardDrive3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
