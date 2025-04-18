import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowBothIcon],svg[codicon-arrow-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3 9l2.146 2.146l-.707.708l-3-3v-.708l3-3l.707.708L3 8h10l-2.146-2.146l.707-.708l3 3v.708l-3 3l-.707-.707L13 9z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconArrowBothIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
