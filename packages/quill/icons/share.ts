import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillShareIcon],svg[quill-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8m-11 3V3.5M22 9l-6-6l-6 6"></svg:path>`,
})
export class QuillShareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
