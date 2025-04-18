import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContractLeftLineIcon],svg[ri-contract-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.071 4.929l1.414 1.414L11.83 11H21v2h-9.17l4.656 4.657l-1.414 1.414L8.001 12zm-11.07 14.07V5h2v14z"></svg:path>`,
})
export class RiContractLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
