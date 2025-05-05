import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFeatherpenIcon],svg[picon-featherpen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 8l2-7l4-1l2 2l-1 4M3 3v1L0 8l4-3h1V3"></svg:path>`,
})
export class PiconFeatherpenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
