import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDoneRingRoundIcon],svg[lets-icons-done-ring-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m9 10l3.258 2.444a1 1 0 0 0 1.353-.142L20 5"></svg:path><svg:path d="M21 12a9 9 0 1 1-6.67-8.693"></svg:path></svg:g>`,
})
export class LetsIconsDoneRingRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
