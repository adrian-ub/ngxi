import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillCloudiaIcon],svg[quill-cloudia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path fill="currentColor" d="M11.5 18a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21h-2m12.708-4.717a9 9 0 1 0-17.66-3.218A7.001 7.001 0 0 0 10 27h13a6 6 0 0 0 3.708-10.717"></svg:path></svg:g>`,
})
export class QuillCloudiaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
