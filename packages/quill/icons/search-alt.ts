import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillSearchAltIcon],svg[quill-search-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m28 27l-7.5-7.5M5 13a9 9 0 1 0 18 0a9 9 0 0 0-18 0"></svg:path>`,
})
export class QuillSearchAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
