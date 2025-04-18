import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonJoinNodeIcon],svg[carbon-join-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9h4v2H2zm0 12h4v2H2zm23-10l-1.414 1.414L26.172 15H18V4h-6v5H8v2h4v10H8v2h4v5h6V17h8.172l-2.586 2.586L25 21l5-5z"></svg:path>`,
})
export class CarbonJoinNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
