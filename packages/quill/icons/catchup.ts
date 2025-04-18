import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillCatchupIcon],svg[quill-catchup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 27H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6m0 14h2a2 2 0 0 0 2-2V15a2 2 0 0 0-2-2h-2m0 14V13M9 10h4m-4 7h10M9 21h6"></svg:path>`,
})
export class QuillCatchupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
