import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWiseIcon],svg[simple-icons-wise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.488 7.469L0 15.05h11.585l1.301-3.576H7.922l3.033-3.507l.01-.092L8.993 4.48h8.873l-6.878 18.925h4.706L24 .595H2.543z"></svg:path>`,
})
export class SimpleIconsWiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
