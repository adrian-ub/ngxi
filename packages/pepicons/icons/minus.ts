import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsMinusIcon],svg[pepicons-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 10h10"></svg:path><svg:path fill="currentColor" d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5Z"></svg:path></svg:g>`,
})
export class PepiconsMinusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
