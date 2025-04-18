import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEightIcon],svg[mynaui-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.875 12S15 12.625 15 14.5S13.6 17 11.875 17s-3.125-.625-3.125-2.5s3.125-2.5 3.125-2.5m0 0S15 11.375 15 9.5S13.6 7 11.875 7S8.75 7.625 8.75 9.5s3.125 2.5 3.125 2.5"></svg:path>`,
})
export class MynauiEightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
