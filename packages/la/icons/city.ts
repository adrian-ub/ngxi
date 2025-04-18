import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCityIcon],svg[la-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 3.883l-7 3.5V28h26V10H17V7.383zm0 2.234l5 2.5V26H5V8.617zM7 10v2h2v-2zm4 0v2h2v-2zm6 2h10v14H17zM7 14v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2zM7 18v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2zM7 22v2h2v-2zm4 0v2h2v-2zm8 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaCityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
