import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleNumber4Icon],svg[gravity-ui-circle-number-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.664 4.5c-.334 0-.649.153-.855.415l-2.57 3.27A1.121 1.121 0 0 0 6.123 10H8.25v.75a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0 0-1.5V5.586c0-.6-.486-1.086-1.086-1.086M8.25 6.782V8.5H6.9z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleNumber4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
