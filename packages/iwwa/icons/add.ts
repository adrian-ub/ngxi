import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaAddIcon],svg[iwwa-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m36.495 19.226l-15.732.012l.012-15.732a.763.763 0 0 0-1.525 0l-.012 15.733l-15.733.011a.763.763 0 0 0 0 1.525l15.732-.012l-.012 15.732c0 .204.082.4.223.538a.764.764 0 0 0 1.303-.538l.012-15.732l15.732-.012a.763.763 0 1 0 0-1.525"></svg:path>`,
})
export class IwwaAddIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
