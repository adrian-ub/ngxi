import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmLayoutStackVIcon],svg[charm-layout-stack-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 2.75h12.5v10.5H1.75zm6.25.5v9.5M8 8h6"></svg:path>`,
})
export class CharmLayoutStackVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
