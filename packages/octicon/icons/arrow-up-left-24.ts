import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconArrowUpLeft24Icon],svg[octicon-arrow-up-left-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 15.5a.75.75 0 0 1-.75-.75v-9A.75.75 0 0 1 5.75 5h9a.75.75 0 0 1 0 1.5H7.56l10.22 10.22a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L6.5 7.56v7.19a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class OcticonArrowUpLeft24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
