import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleCheckmark24FilledIcon],svg[fluent-table-simple-checkmark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 12.75V21h-5A3.25 3.25 0 0 1 3 17.75v-5zm1.5 8.25v-8.25H21v5A3.25 3.25 0 0 1 17.75 21zm0-18v8.25H21v-5A3.25 3.25 0 0 0 17.75 3zm-1.5 0v8.25H3v-5A3.25 3.25 0 0 1 6.25 3zm7.533 13.28a.75.75 0 1 0-1.06-1.06l-1.473 1.472l-.47-.47a.75.75 0 1 0-1.06 1.061l1 1a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class FluentTableSimpleCheckmark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
