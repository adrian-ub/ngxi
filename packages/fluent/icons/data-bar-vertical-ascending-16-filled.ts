import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVerticalAscending16FilledIcon],svg[fluent-data-bar-vertical-ascending-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 2A1.5 1.5 0 0 1 14 3.5v9a1.5 1.5 0 0 1-3 0v-9A1.5 1.5 0 0 1 12.5 2m-4 3A1.5 1.5 0 0 1 10 6.5v6a1.5 1.5 0 0 1-3 0v-6A1.5 1.5 0 0 1 8.5 5m-4 3A1.5 1.5 0 0 1 6 9.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 4.5 8"></svg:path>`,
})
export class FluentDataBarVerticalAscending16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
