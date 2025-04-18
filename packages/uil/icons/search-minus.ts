import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilSearchMinusIcon],svg[uil-search-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7m4-8H7a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilSearchMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
