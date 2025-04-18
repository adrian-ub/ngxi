import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCommentSlashIcon],svg[la-comment-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.707 2.293L2.293 3.707l26 26l1.414-1.414L27.414 26H29V6H7.414zM3 7.243V26h9.586L16 29.414L19.414 26h2.344l-2-2h-1.172L16 26.586L13.414 24H5V9.242zM9.414 8H27v16h-1.586z"></svg:path>`,
})
export class LaCommentSlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
