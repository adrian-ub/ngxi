import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCommentAlertIcon],svg[zmdi-comment-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 3q18 0 30.5 12.5T427 45v256q0 18-12.5 30.5T384 344H85L0 429V45q0-17 12.5-29.5T43 3zM235 259v-43h-43v43zm0-86V88h-43v85z"></svg:path>`,
})
export class ZmdiCommentAlertIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
