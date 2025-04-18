import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFanIcon],svg[grommet-icons-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm3-3c4 3 5 7 5 7m-8 4c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11Zm0-14c3-5 7-6 7-6m-7 12c-3 4-7 5-7 5m4-8C5 9 4 5 4 5"></svg:path>`,
})
export class GrommetIconsFanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
