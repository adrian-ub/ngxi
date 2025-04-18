import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCastIcon],svg[charm-cast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 5.25v-2.5h12.5v10.5h-4.5m-8-5a5 5 0 0 1 5 5m-5-2.5a2.5 2.5 0 0 1 2.5 2.5m-2.5 0"></svg:path>`,
})
export class CharmCastIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
