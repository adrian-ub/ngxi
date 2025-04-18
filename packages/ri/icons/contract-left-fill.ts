import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riContractLeftFillIcon],svg[ri-contract-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v6h6v2h-6v6l-7-7zM4 19V5h2v14z"></svg:path>`,
})
export class RiContractLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
