import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciSingleQuotesRIcon],svg[ci-single-quotes-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17a3 3 0 0 0 3-3v-2m0 0V8.598c0-.559 0-.838-.109-1.052a1 1 0 0 0-.437-.437C14.24 7 13.96 7 13.4 7h-1.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C10 7.76 10 8.04 10 8.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.109.494.109 1.053.109z"></svg:path>`,
})
export class CiSingleQuotesRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
