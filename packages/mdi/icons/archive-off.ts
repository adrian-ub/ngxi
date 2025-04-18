import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveOffIcon],svg[mdi-archive-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.2 7l-4-4H21v4zM20 8h-8.8l8.8 8.8zm0 11.35v-.01L8.66 8l-1-1l-5.27-5.27L1.11 3L3 4.89V7h2.11l1 1H4v13h15.11l1.73 1.73l1.27-1.27z"></svg:path>`,
})
export class MdiArchiveOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
