import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconArrowBoth16Icon],svg[octicon-arrow-both-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.72 3.72a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042L2.56 7h10.88l-2.22-2.22a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734l2.22-2.22H2.56l2.22 2.22a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-3.5-3.5a.75.75 0 0 1 0-1.06Z"></svg:path>`,
})
export class OcticonArrowBoth16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
