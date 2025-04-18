import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEscalatorDownPersonIcon],svg[guidance-escalator-down-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m.5 5.5l9 9h14v9H10.642a10 10 0 0 1-7.07-2.929L.5 17.5m11-3l1.018-5.588A3 3 0 0 1 15.459 6.5H16l.598 2.99a2.5 2.5 0 0 0 2.451 2.01H22m-5.65-7s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25z"></svg:path>`,
})
export class GuidanceEscalatorDownPersonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
