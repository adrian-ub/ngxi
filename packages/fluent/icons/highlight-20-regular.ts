import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHighlight20RegularIcon],svg[fluent-highlight-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1 1.415V9a2 2 0 0 1-2 2v2.073a2 2 0 0 1-1.106 1.789l-6.17 3.085A.5.5 0 0 1 6 17.5V11a2 2 0 0 1-2-2V7.915A1.5 1.5 0 0 1 3 6.5v-4a.5.5 0 0 1 .5-.5M5 8v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8zm2 3v5.691l5.447-2.724a1 1 0 0 0 .553-.894V11z"></svg:path>`,
})
export class FluentHighlight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
