import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchSolidIcon],svg[teenyicons-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 0a6.5 6.5 0 1 0 4.23 11.436l3.416 3.418l.708-.708l-3.418-3.417A6.5 6.5 0 0 0 6.5 0"></svg:path>`,
})
export class TeenyiconsSearchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
