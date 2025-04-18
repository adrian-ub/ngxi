import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShieldCheckSolidIcon],svg[streamline-shield-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1.5C0 .677.68 0 1.5 0h11c.82 0 1.5.678 1.5 1.5v2.853c0 4.136-2.51 8.006-6.411 9.528a1.6 1.6 0 0 1-.596.12a1.6 1.6 0 0 1-.582-.12C2.51 12.359 0 8.489 0 4.353zm10.56 3.008a.75.75 0 1 0-1.12-.996L5.898 7.496L4.45 6.41a.75.75 0 1 0-.9 1.2l2 1.5a.75.75 0 0 0 1.01-.102z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShieldCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
