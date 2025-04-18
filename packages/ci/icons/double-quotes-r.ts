import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDoubleQuotesRIcon],svg[ci-double-quotes-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17a3 3 0 0 0 3-3v-2m0 0V8.598c0-.558 0-.838-.109-1.052a1 1 0 0 0-.437-.437C18.24 7 17.96 7 17.4 7h-1.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C14 7.76 14 8.04 14 8.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109zM7 17a3 3 0 0 0 3-3v-2m0 0V8.598c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C9.24 7 8.96 7 8.4 7H6.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C5 7.76 5 8.04 5 8.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 12 6.04 12 6.598 12z"></svg:path>`,
})
export class CiDoubleQuotesRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
