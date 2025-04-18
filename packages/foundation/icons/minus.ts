import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationMinusIcon],svg[foundation-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.447 38.528H11.554a2.024 2.024 0 0 0-2.024 2.024v18.896c0 1.118.907 2.024 2.024 2.024h76.892a2.024 2.024 0 0 0 2.023-2.024V40.552a2.023 2.023 0 0 0-2.022-2.024"></svg:path>`,
})
export class FoundationMinusIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
