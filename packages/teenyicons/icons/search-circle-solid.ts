import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSearchCircleSolidIcon],svg[teenyicons-search-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M7 4a3 3 0 1 0 1.738 5.445l1.409 1.409l.707-.707l-1.409-1.409A3 3 0 0 0 7 4" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSearchCircleSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
