import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleMultiple24FilledIcon],svg[fluent-table-simple-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 19H11.5v-7.5H19v4.25A3.25 3.25 0 0 1 15.75 19M19 10h-7.5V2h4.25A3.25 3.25 0 0 1 19 5.25zm-9 0V2H5.25A3.25 3.25 0 0 0 2 5.25V10zm0 9v-7.5H2v4.25A3.25 3.25 0 0 0 5.25 19zm-1.75 3a3.25 3.25 0 0 1-3-2h10.502a4.25 4.25 0 0 0 4.25-4.25V5.25a3.25 3.25 0 0 1 1.999 3v8.25a5.5 5.5 0 0 1-5.5 5.5z"></svg:path>`,
})
export class FluentTableSimpleMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
