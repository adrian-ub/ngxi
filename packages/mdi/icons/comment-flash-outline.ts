import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCommentFlashOutlineIcon],svg[mdi-comment-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 16h-2.2l1.7-4h-5v6h2v5zM15 18h-1.1l-3.7 3.7c-.2.2-.4.3-.7.3H9c-.6 0-1-.4-1-1v-3H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v6h-2V4H4v12h6v3.1l3.1-3.1H15z"></svg:path>`,
})
export class MdiCommentFlashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
