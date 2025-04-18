import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBookmark1Icon],svg[lineicons-bookmark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4.482a2.25 2.25 0 0 1 2.25-2.25h10.5A2.25 2.25 0 0 1 20 4.482v17a.75.75 0 0 1-1.166.625l-5.918-3.946a.75.75 0 0 0-.832 0l-5.918 3.945A.75.75 0 0 1 5 21.483zm2.25-.75a.75.75 0 0 0-.75.75v15.599l4.752-3.168a2.25 2.25 0 0 1 2.496 0l4.752 3.168V4.482a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBookmark1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
