import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenD3dIcon],svg[token-d3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.29 9.284l.507 5.335l2.749 4.712l1.707-2.11l-2.198-6.868zm17.399 0l-.502 5.335l-2.749 4.712l-1.729-2.127l2.22-6.85zm-5.056 8.007H8.439l-1.697 2.122L12.093 21l5.182-1.587zM6.038 10.14l-2.765-.998L6.96 5.105L11.924 3v3l-5.891 4.14zm11.924 0l2.765-.998l-3.687-4.037L12.076 3v3l5.891 4.14z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.815 10.44L12.01 6.273L6.208 10.44l2.214 6.742H15.6l2.22-6.742zM7.582 13.72l4.43 3.25l4.428-3.25l-1.69-5.264H9.272z" clip-rule="evenodd"></svg:path>`,
})
export class TokenD3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
