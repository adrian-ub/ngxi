import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTagAdd48FilledIcon],svg[fluent-tag-add-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.49 7.245A4.25 4.25 0 0 1 26.495 6h11.257a4.25 4.25 0 0 1 4.25 4.25v11.257a4.25 4.25 0 0 1-.452 1.909A12.94 12.94 0 0 0 34 21c-7.18 0-13 5.82-13 13c0 2.815.895 5.42 2.415 7.549a4.25 4.25 0 0 1-4.909-.796L7.25 29.495a4.25 4.25 0 0 1 0-6.01zM33.5 17a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M45 34c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-10-7a1 1 0 1 0-2 0v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6z"></svg:path>`,
})
export class FluentTagAdd48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
