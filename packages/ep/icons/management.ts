import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epManagementIcon],svg[ep-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 128v288l96-96l96 96V128h128v768H320V128zm-448 0h128v768H128z"></svg:path>`,
})
export class EpManagementIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
