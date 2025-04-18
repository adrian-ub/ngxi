import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPotMixOutlineIcon],svg[mdi-pot-mix-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 9L18 3.1l1.7 1L16.9 9zm1.7 1H21v2h-2v7c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-7H3v-2zm.7 2H7v7h10z"></svg:path>`,
})
export class MdiPotMixOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
