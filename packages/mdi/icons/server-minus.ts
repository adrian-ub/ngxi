import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiServerMinusIcon],svg[mdi-server-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m5 4h1V6H9zM5 6v2h2V6zm3 10h8v2H8z"></svg:path>`,
})
export class MdiServerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
