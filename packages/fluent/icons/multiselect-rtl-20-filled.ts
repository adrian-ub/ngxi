import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiselectRtl20FilledIcon],svg[fluent-multiselect-rtl-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 2 5.25m0 5a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m.75 4.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM18.308 4.252a.75.75 0 1 0-1.116-1.004l-1.72 1.913l-.692-.691a.75.75 0 1 0-1.06 1.06l1.25 1.25a.75.75 0 0 0 1.088-.028zm-.056 8.94a.75.75 0 0 1 .056 1.06l-2.25 2.5a.75.75 0 0 1-1.088.028l-1.25-1.25a.75.75 0 1 1 1.06-1.06l.691.69l1.721-1.912a.75.75 0 0 1 1.06-.055"></svg:path>`,
})
export class FluentMultiselectRtl20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
