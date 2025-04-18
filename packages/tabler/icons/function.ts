import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFunctionIcon],svg[tabler-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 6.667A2.667 2.667 0 0 1 6.667 4h10.666A2.667 2.667 0 0 1 20 6.667v10.666A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.333z"></svg:path><svg:path d="M9 15.5v.25c0 .69.56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374-1.244l.752-7.512A1.38 1.38 0 0 1 13.75 7c.69 0 1.25.56 1.25 1.25v.25M9 12h6"></svg:path></svg:g>`,
})
export class TablerFunctionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
