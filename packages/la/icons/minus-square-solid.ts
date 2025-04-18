import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMinusSquareSolidIcon],svg[la-minus-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm4 8v2h10v-2z"></svg:path>`,
})
export class LaMinusSquareSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
