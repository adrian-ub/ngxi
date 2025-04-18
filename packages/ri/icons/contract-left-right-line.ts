import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContractLeftRightLineIcon],svg[ri-contract-left-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.793 5.793L12.586 12l6.207 6.207l1.414-1.414L15.414 12l4.793-4.793zM5.207 18.207L11.414 12L5.207 5.793L3.793 7.207L8.586 12l-4.793 4.793z"></svg:path>`,
})
export class RiContractLeftRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
