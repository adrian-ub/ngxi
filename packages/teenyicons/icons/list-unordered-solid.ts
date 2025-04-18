import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListUnorderedSolidIcon],svg[teenyicons-list-unordered-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 4H0V3h2zm13 0H4V3h11zM2 8H0V7h2zm13 0H4V7h11zM2 12H0v-1h2zm13 0H4v-1h11z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsListUnorderedSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
