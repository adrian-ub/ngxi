import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDownmostIcon],svg[picon-downmost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6h6v1H1m1-5l2 2l2-2l1 1l-3 3l-3-3"></svg:path>`,
})
export class PiconDownmostIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
