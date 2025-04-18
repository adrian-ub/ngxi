import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPotMixIcon],svg[mdi-pot-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.6 9L18 3.1l1.7 1L16.9 9zm-.6 1H3v2h2v7c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-7h2v-2z"></svg:path>`,
})
export class MdiPotMixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
