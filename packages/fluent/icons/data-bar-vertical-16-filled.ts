import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVertical16FilledIcon],svg[fluent-data-bar-vertical-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 3.5 2m4 3A1.5 1.5 0 0 0 6 6.5v6a1.5 1.5 0 0 0 3 0v-6A1.5 1.5 0 0 0 7.5 5m4 3A1.5 1.5 0 0 0 10 9.5v3a1.5 1.5 0 0 0 3 0v-3A1.5 1.5 0 0 0 11.5 8"></svg:path>`,
})
export class FluentDataBarVertical16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
