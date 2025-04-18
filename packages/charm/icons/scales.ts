import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmScalesIcon],svg[charm-scales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M1.75 3.75c1 1 2.5 1.5 4 0h4.5c1.5 1.5 3 1 4 0M8 1.75v12m-3.25.5h6.5"></svg:path><svg:path d="m12.75 4.75l-2 5c.5 1 3.5 1 4 0zm-9.5 0l-2 5c.5 1 3.5 1 4 0z"></svg:path></svg:g>`,
})
export class CharmScalesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
