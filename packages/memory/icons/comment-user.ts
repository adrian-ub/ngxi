import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCommentUserIcon],svg[memory-comment-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h-2V9H9V7h1V6h2v1h1v2h-1m3 5H7v-2h1v-1h6v1h1m-7 7h1v-1h1v-1h1v-1h8V4H3v12h5m2 5H6v-3H2v-1H1V3h1V2h18v1h1v14h-1v1h-8v1h-1v1h-1Z"></svg:path>`,
})
export class MemoryCommentUserIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
