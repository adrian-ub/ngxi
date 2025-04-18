import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBackspaceIcon],svg[gg-backspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m17.743 8.464l1.414 1.415L17.036 12l2.121 2.121l-1.414 1.415l-2.122-2.122l-2.121 2.122l-1.414-1.415L14.207 12l-2.121-2.121L13.5 8.465l2.121 2.12z"></svg:path><svg:path fill-rule="evenodd" d="m8.586 19l-6.293-6.293a1 1 0 0 1 0-1.414L8.586 5h14v14zm.828-12l-5 5l5 5h11.172V7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBackspaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
