import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPaperclipIcon],svg[fluent-emoji-flat-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#fluentEmojiFlatPaperclip0)"><svg:path fill="#BEBEBE" d="M19.374 5.433a6.117 6.117 0 0 1 9.074 8.206L16.82 26.5l-.015.016l-.01.01A8.345 8.345 0 0 1 4.441 15.305l8.502-9.402a1.25 1.25 0 0 1 1.853 1.676L6.294 16.98a5.846 5.846 0 1 0 8.672 7.842l11.629-12.858a3.619 3.619 0 1 0-5.368-4.855l-9.873 10.917a1.346 1.346 0 1 0 1.996 1.805l6.654-7.357a1.25 1.25 0 0 1 1.853 1.675l-6.654 7.358a3.844 3.844 0 0 1-5.738-5.117l.02-.023z"></svg:path></svg:g><svg:defs><svg:clippath id="fluentEmojiFlatPaperclip0"><svg:path fill="#fff" d="M0 0h32v32H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class FluentEmojiFlatPaperclipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
