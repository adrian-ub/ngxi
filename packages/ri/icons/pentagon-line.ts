import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPentagonLineIcon],svg[ri-pentagon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3.03l8.53 6.198l-3.258 10.028H6.729L3.47 9.228zm10.747 5.478L12 .7L1.253 8.508l4.105 12.634h13.284z"></svg:path>`,
})
export class RiPentagonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
