import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCommentAltUploadIcon],svg[uil-comment-alt-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 11a1 1 0 0 0 2 0V5.41l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-3-3a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3Zm13-5h-5a1 1 0 0 0 0 2h5a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H8.5a1 1 0 0 1-1-1v-1a1 1 0 0 0-2 0v1a3 3 0 0 0 3 3h8.36l3 2.73a1 1 0 0 0 .68.27a1.1 1.1 0 0 0 .4-.08a1 1 0 0 0 .6-.92V9a3 3 0 0 0-3.04-3"></svg:path>`,
})
export class UilCommentAltUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
