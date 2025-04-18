import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContractRightLineIcon],svg[ri-contract-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.172 11L7.515 6.343L8.929 4.93l7.07 7.07l-7.07 7.072l-1.414-1.414L12.17 13H3v-2zM18 19V5h2v14z"></svg:path>`,
})
export class RiContractRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
