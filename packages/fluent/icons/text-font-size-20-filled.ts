import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextFontSize20FilledIcon],svg[fluent-text-font-size-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.007 3a.75.75 0 0 1 .702.504l4.25 12.25a.75.75 0 0 1-1.417.492l-1.3-3.746h-4.657l-1.38 3.759a.75.75 0 0 1-1.404.012L6.92 14H4.257l-.799 2.25a.75.75 0 0 1-1.414-.5L4.793 8A.75.75 0 0 1 6.2 7.98l2.282 5.895L12.296 3.49a.75.75 0 0 1 .711-.49m-8.219 9.5h1.553l-.81-2.093zm8.192-6.52L11.136 11h3.586z"></svg:path>`,
})
export class FluentTextFontSize20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
