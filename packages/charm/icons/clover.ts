import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCloverIcon],svg[charm-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 2.75C4.25 4.25 6 6 8 8c2-2 3.75-3.75 3.25-5.25s-2.5-1-3.25.5c-.75-1.5-2.75-2-3.25-.5M8 8c2 2 3.75 3.75 5.25 3.25s1-2.5-.5-3.25c1.5-.75 2-2.75.5-3.25S10 6 8 8m0 0c-2 2-3.75 3.75-3.25 5.25s2.5 1 3.25-.5c.75 1.5 2.75 2 3.25.5S10 10 8 8m0 0C6 6 4.25 4.25 2.75 4.75s-1 2.5.5 3.25c-1.5.75-2 2.75-.5 3.25S6 10 8 8"></svg:path>`,
})
export class CharmCloverIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
