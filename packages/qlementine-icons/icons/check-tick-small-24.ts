import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsCheckTickSmall24Icon],svg[qlementine-icons-check-tick-small-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.9 9.15a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.707l2.65 2.65l5.65-5.65a.5.5 0 0 1 .707 0z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsCheckTickSmall24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
