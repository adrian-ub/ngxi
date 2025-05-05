import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShoeIcon],svg[picon-shoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H1L0 3l1-2l4 3l3 1l-1 1H4L2 4"></svg:path>`,
})
export class PiconShoeIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
