import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiHeadingSixIcon],svg[mynaui-heading-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 4.5v15m9.5-15v15M3.75 12h9.5M20 9.5h-1c-1.657 0-3 1.679-3 3.75v3.125m0 0c0 1.726 1.12 3.125 2.5 3.125s2.5-1.4 2.5-3.125s-1.12-2.5-2.5-2.5s-2.5.774-2.5 2.5"></svg:path>`,
})
export class MynauiHeadingSixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
