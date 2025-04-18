import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableOffsetLessThanOrEqualTo24FilledIcon],svg[fluent-table-offset-less-than-or-equal-to-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3H6.25A3.25 3.25 0 0 0 3 6.25V8.5h11zm1.5 5.5H21V6.25A3.25 3.25 0 0 0 17.75 3H15.5zM10 10v4h2.022a6.5 6.5 0 0 1 5.478-3a6.47 6.47 0 0 1 3.5 1.022V10zm-7 5.5h8.314a6.5 6.5 0 0 0-.314 2a6.47 6.47 0 0 0 1.022 3.5H6.25A3.25 3.25 0 0 1 3 17.75zM8.5 10H3v4h5.5zm9 13a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-2-3h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m3.39-5.812a.5.5 0 0 1-.078.702L16.8 16.5l2.012 1.61a.5.5 0 1 1-.624.78l-2.5-2a.5.5 0 0 1 0-.78l2.5-2a.5.5 0 0 1 .702.078"></svg:path>`,
})
export class FluentTableOffsetLessThanOrEqualTo24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
