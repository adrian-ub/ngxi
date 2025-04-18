import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSortAlfaIcon],svg[lets-icons-sort-alfa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6 20h12m-9-8h6m-8 5l3.117-8.726c.785-2.2 1.178-3.3 1.883-3.3s1.098 1.1 1.883 3.3L17 17"></svg:path>`,
})
export class LetsIconsSortAlfaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
