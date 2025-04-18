import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStorage16FilledIcon],svg[fluent-storage-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4A2.5 2.5 0 0 0 1 6.5v2A2.5 2.5 0 0 0 3.5 11h9A2.5 2.5 0 0 0 15 8.5v-2A2.5 2.5 0 0 0 12.5 4zM10 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FluentStorage16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
