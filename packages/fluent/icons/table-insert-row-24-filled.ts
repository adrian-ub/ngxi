import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableInsertRow24FilledIcon],svg[fluent-table-insert-row-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 4.5H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5M8 8H5.25C4.007 8 3 8.895 3 10v4c0 1.105 1.007 2 2.25 2H8zm1.5 8h5V8h-5zm9.25 0H16V8h2.75c1.243 0 2.25.895 2.25 2v4c0 1.105-1.007 2-2.25 2m-15 5h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentTableInsertRow24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
