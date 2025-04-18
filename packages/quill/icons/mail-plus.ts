import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillMailPlusIcon],svg[quill-mail-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 28v-8m-4 4h8m0-15v7m0-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m26 0l-11.862 8.212a2 2 0 0 1-2.276 0L3 9m0 0v14a2 2 0 0 0 2 2h10"></svg:path>`,
})
export class QuillMailPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
