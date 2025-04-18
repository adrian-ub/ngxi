import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[quillStackIcon],svg[quill-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="19" cy="9" r=".5" stroke="currentColor"></svg:circle><svg:path d="M9 8a1 1 0 0 0 0 2zm4 2a1 1 0 1 0 0-2zm-4 4a1 1 0 1 0 0 2zm10 2a1 1 0 1 0 0-2zM9 18a1 1 0 1 0 0 2zm8 2a1 1 0 1 0 0-2zm9-10v17h2V10zm-1 18H11v2h14zm-14 0a1 1 0 0 1-1-1H8a3 3 0 0 0 3 3zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM25 9a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM10 27v-2H8v2zM25 7h-2v2h2zM9 10h4V8H9zm0 6h10v-2H9zm0 4h8v-2H9zM7 5h14V3H7zm15 1v17h2V6zm-1 18H7v2h14zM6 23V6H4v17zm1 1a1 1 0 0 1-1-1H4a3 3 0 0 0 3 3zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3zM21 5a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3zM7 3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1z"></svg:path></svg:g>`,
})
export class QuillStackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
