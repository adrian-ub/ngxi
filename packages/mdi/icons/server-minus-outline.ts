import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiServerMinusOutlineIcon],svg[mdi-server-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17h8v2H8zM2 5.6v4.8c0 .9.5 1.6 1.2 1.6h17.7c.6 0 1.2-.7 1.2-1.6V5.6C22 4.7 21.5 4 20.8 4H3.2C2.5 4 2 4.7 2 5.6M10 9V7H9v2zM5 9h2V7H5zm15 1H4V6h16z"></svg:path>`,
})
export class MdiServerMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
