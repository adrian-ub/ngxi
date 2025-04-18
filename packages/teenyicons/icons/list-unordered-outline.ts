import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsListUnorderedOutlineIcon],svg[teenyicons-list-unordered-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 7.5h11m-15 0h2m2-4h11m-15 0h2m2 8h11m-15 0h2"></svg:path>`,
})
export class TeenyiconsListUnorderedOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
