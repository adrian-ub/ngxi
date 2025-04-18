import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberCircle548RegularIcon],svg[fluent-number-circle-5-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.75 16.5h-6.832l-.332 4.978l.66-.005c1.028-.004 2.325.006 2.943.093a6.75 6.75 0 1 1-6.594 10.37a1.25 1.25 0 1 1 2.094-1.366a4.25 4.25 0 1 0 4.153-6.528c-.4-.057-1.485-.073-2.586-.069a114 114 0 0 0-1.818.023l-.12.003h-.04a1.25 1.25 0 0 1-1.277-1.332l.5-7.5A1.25 1.25 0 0 1 20.75 14h8.002a1.25 1.25 0 0 1 0 2.5M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24S33.665 41.5 24 41.5S6.5 33.665 6.5 24"></svg:path>`,
})
export class FluentNumberCircle548RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
