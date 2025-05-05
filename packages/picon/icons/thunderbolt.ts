import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconThunderboltIcon],svg[picon-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 0l4 4H2l4 4"></svg:path>`,
})
export class PiconThunderboltIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
