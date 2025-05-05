import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSkateIcon],svg[picon-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4L3 6H2l1-3H1V2h6v1H5l1 3H5M4 2L3 1l1-1l1 1M0 6.5h8L7 7Q6 9 5 7H3Q2 9 1 7"></svg:path>`,
})
export class PiconSkateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
