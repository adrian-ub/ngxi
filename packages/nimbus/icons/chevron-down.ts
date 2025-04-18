import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusChevronDownIcon],svg[nimbus-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10.18L2.39 4.52l-.89.87l5.59 5.71a1.18 1.18 0 0 0 .86.39a1.13 1.13 0 0 0 .85-.39l5.7-5.7l-.88-.89z"></svg:path>`,
})
export class NimbusChevronDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
