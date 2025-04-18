import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillEarthIcon],svg[quill-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M21.5 4.5c0 1.167-1.735 1.5-3 1.5c-5.217 0-10.705 3.48-11.421 8.004C6.992 14.549 6.552 15 6 15H3m1 5.5c.785.262 2.126 1.285 3.44 1.517c.57.101 1.153.464 1.299 1.023c.303 1.16.548 1.992-.239 3.96m8.725-1.707c-1 0-5-2.2-5-9c0-5.5 3.5-7 8.5-7c3 0 5 1.5 5 5s-3.5 2.707-5 4.207s0 6.793-3.5 6.793ZM29 16c0 7.18-5.82 13-13 13S3 23.18 3 16S8.82 3 16 3s13 5.82 13 13Z"></svg:path>`,
})
export class QuillEarthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
