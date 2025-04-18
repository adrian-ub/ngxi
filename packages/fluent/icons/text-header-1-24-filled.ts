import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextHeader124FilledIcon],svg[fluent-text-header-1-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.182 5.017q.134.024.253.082c.36.174.578.544.565.934V18a1 1 0 1 1-2 0V9.611a5.7 5.7 0 0 1-2.183 1.338a1 1 0 0 1-.633-1.897c1.129-.377 2.182-1.333 2.858-3.339a1 1 0 0 1 .278-.446a1 1 0 0 1 .862-.25M3 5a1 1 0 0 1 1 1v5h6V6a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0v-5H4v5a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentTextHeader124FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
