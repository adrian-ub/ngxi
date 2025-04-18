import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillUserHappyIcon],svg[quill-user-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 23s1 1 2.5 1s2.5-1 2.5-1m4.5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-12 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m18-2c0 7.18-5.82 13-13 13S3 23.18 3 16S8.82 3 16 3s13 5.82 13 13"></svg:path>`,
})
export class QuillUserHappyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
