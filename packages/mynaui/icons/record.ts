import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiRecordIcon],svg[mynaui-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-11 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0M6.5 16h11"></svg:path>`,
})
export class MynauiRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
