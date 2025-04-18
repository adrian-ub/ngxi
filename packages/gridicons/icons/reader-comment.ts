import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderCommentIcon],svg[gridicons-reader-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M12.528 14.556v-.75h-8.75c-.568 0-1.028-.46-1.028-1.028v-8c0-.568.46-1.028 1.028-1.028h12.444c.568 0 1.028.46 1.028 1.028v7.948c0 .905-.438 1.756-1.175 2.282l-3.547 2.534z"></svg:path>`,
})
export class GridiconsReaderCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
