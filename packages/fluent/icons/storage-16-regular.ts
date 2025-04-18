import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStorage16RegularIcon],svg[fluent-storage-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6.5A2.5 2.5 0 0 1 3.5 4h9A2.5 2.5 0 0 1 15 6.5v2a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 8.5zM3.5 5A1.5 1.5 0 0 0 2 6.5v2A1.5 1.5 0 0 0 3.5 10h9A1.5 1.5 0 0 0 14 8.5v-2A1.5 1.5 0 0 0 12.5 5zM10 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentStorage16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
