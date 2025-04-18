import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCreativeCommonsIcon],svg[streamline-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0"></svg:path><svg:path d="M6.046 5.6a1.05 1.05 0 0 0-.99-.7h-.7c-.58 0-1.05.47-1.05 1.05v2.1c0 .58.47 1.05 1.05 1.05h.7c.457 0 .846-.292.99-.7m4.648-2.8a1.05 1.05 0 0 0-.99-.7h-.7c-.58 0-1.05.47-1.05 1.05v2.1c0 .58.47 1.05 1.05 1.05h.7c.457 0 .846-.292.99-.7"></svg:path></svg:g>`,
})
export class StreamlineCreativeCommonsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
