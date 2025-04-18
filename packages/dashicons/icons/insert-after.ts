import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsInsertAfterIcon],svg[dashicons-insert-after-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12h2v-2h2V8h-2V6H9v2H7v2h2zm1 4c3.9 0 7-3.1 7-7s-3.1-7-7-7s-7 3.1-7 7s3.1 7 7 7m0-12c2.8 0 5 2.2 5 5s-2.2 5-5 5s-5-2.2-5-5s2.2-5 5-5M3 19h14v-2H3z"></svg:path>`,
})
export class DashiconsInsertAfterIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
