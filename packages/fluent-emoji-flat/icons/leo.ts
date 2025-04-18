import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLeoIcon],svg[fluent-emoji-flat-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M24.64 22.56c-.39.14-.64.52-.64.94c0 1.12-.93 2.03-2.06 2c-1.16-.03-2.02-1.07-1.93-2.23c.03-.42.15-.83.34-1.2l4.1-7.87c.02-.03.03-.06.05-.1c.33-.82.5-1.69.5-2.59c.01-3.8-2.97-6.89-6.77-7.02C14.27 4.38 11 7.56 11 11.5c0 .7.1 1.38.3 2.03c-.12-.01-.25-.02-.37-.02c-2.81 0-5.07 2.36-4.92 5.2a4.93 4.93 0 0 0 4.65 4.65c2.84.15 5.2-2.11 5.2-4.92c0-1.33-.53-2.54-1.39-3.43c-.35-.36-.66-.75-.89-1.19c-.38-.71-.58-1.5-.58-2.32c0-2.76 2.24-5 5-5a5.002 5.002 0 0 1 4.66 6.82l-4.08 7.83c-.38.72-.58 1.54-.58 2.35c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.67-.66-1.18-1.36-.94m-13.71-1.18C9.31 21.38 8 20.06 8 18.45s1.31-2.93 2.93-2.93s2.93 1.31 2.93 2.93s-1.32 2.93-2.93 2.93"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLeoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
