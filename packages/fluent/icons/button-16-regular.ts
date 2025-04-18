import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentButton16RegularIcon],svg[fluent-button-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5.5A2.5 2.5 0 0 1 3.5 3h9A2.5 2.5 0 0 1 15 5.5v4a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 9.5zM3.5 4A1.5 1.5 0 0 0 2 5.5v4A1.5 1.5 0 0 0 3.5 11h9A1.5 1.5 0 0 0 14 9.5v-4A1.5 1.5 0 0 0 12.5 4zM7 7.5a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1-.5-.5m-1 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentButton16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
