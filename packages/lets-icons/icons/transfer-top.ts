import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransferTopIcon],svg[lets-icons-transfer-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M9 19v-7H5.483a.2.2 0 0 1-.142-.341L12 5l6.659 6.659a.2.2 0 0 1-.142.341H15v7"></svg:path>`,
})
export class LetsIconsTransferTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
