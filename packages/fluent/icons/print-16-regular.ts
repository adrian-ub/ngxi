import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPrint16RegularIcon],svg[fluent-print-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.5A1.5 1.5 0 0 1 5.5 2h5A1.5 1.5 0 0 1 12 3.5V4h1a2 2 0 0 1 2 2v4.5a1.5 1.5 0 0 1-1.5 1.5H12v.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 12.5V12H2.5A1.5 1.5 0 0 1 1 10.5V6a2 2 0 0 1 2-2h1zM4 11v-.5A1.5 1.5 0 0 1 5.5 9h5a1.5 1.5 0 0 1 1.5 1.5v.5h1.5a.5.5 0 0 0 .5-.5V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4.5a.5.5 0 0 0 .5.5zm1-7h6v-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5zm0 6.5v2a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentPrint16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
