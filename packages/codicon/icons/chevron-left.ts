import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconChevronLeftIcon],svg[codicon-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.928 7.976l4.357 4.357l-.618.62L5 8.284v-.618L9.667 3l.618.619z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconChevronLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
