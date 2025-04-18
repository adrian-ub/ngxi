import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransferDownLightIcon],svg[lets-icons-transfer-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 5v7H5.483a.2.2 0 0 0-.142.341L12 19l6.659-6.659a.2.2 0 0 0-.142-.341H15V5"></svg:path>`,
})
export class LetsIconsTransferDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
