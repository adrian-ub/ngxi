import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTabMinusIcon],svg[mdi-tab-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h10v4h8v10H3zm4 8v2h8v-2z"></svg:path>`,
})
export class MdiTabMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
