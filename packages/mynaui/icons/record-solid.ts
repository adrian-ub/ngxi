import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRecordSolidIcon],svg[mynaui-record-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 12.5a4.23 4.23 0 0 1-1.01 2.75h4.52a4.25 4.25 0 1 1 3.24 1.5h-11a4.25 4.25 0 1 1 4.25-4.25"></svg:path>`,
})
export class MynauiRecordSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
