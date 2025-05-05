import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRightmostIcon],svg[picon-rightmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v6h1V1M2 2l2 2l-2 2l1 1l3-3l-3-3"></svg:path>`,
})
export class PiconRightmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
