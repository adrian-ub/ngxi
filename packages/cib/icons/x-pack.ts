import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibXPackIcon],svg[cib-x-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.266 26.068l7.839-7.854l4.469 4.479a4.763 4.763 0 0 1 0 6.734l-1.104 1.104a4.75 4.75 0 0 1-6.734 0zM30.563 2.531l-1.109-1.104a4.763 4.763 0 0 0-6.734 0l-6.719 6.734l-6.734-6.734a4.763 4.763 0 0 0-6.734 0L1.429 2.531a4.763 4.763 0 0 0 0 6.734l6.734 6.734l-6.734 6.734a4.763 4.763 0 0 0 0 6.734l1.104 1.104a4.763 4.763 0 0 0 6.734 0L30.574 9.264a4.763 4.763 0 0 0 0-6.734z"></svg:path>`,
})
export class CibXPackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
