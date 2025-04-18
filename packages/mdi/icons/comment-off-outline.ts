import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCommentOffOutlineIcon],svg[mdi-comment-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.2 4l-2-2H20a2 2 0 0 1 2 2v12c0 .76-.43 1.41-1.05 1.75L19.2 16h.8V4zm14.91 17.46l-1.27 1.27L16.11 18H13.9l-3.7 3.71c-.2.19-.45.29-.7.29H9c-.55 0-1-.45-1-1v-3H4a2 2 0 0 1-2-2V3.9L1.11 3l1.28-1.27zm-8-5.46L4 5.89V16h6v3.08L13.08 16z"></svg:path>`,
})
export class MdiCommentOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
