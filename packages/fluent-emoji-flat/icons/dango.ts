import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDangoIcon],svg[fluent-emoji-flat-dango-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3883E" d="M6.778 8.238c-.37 0-.74-.14-1.03-.43l-3.32-3.32c-.57-.57-.57-1.49 0-2.06s1.49-.57 2.06 0l3.31 3.32c.57.57.57 1.49 0 2.06c-.28.29-.65.43-1.02.43"></svg:path><svg:path fill="#FBB8AB" d="M9.177 14.908a6.06 6.06 0 1 0 0-12.12a6.06 6.06 0 0 0 0 12.12"></svg:path><svg:path fill="#FFDEA7" d="M15.438 21.168a6.06 6.06 0 1 0 0-12.12a6.06 6.06 0 0 0 0 12.12"></svg:path><svg:path fill="#00F397" d="M21.708 27.438a6.06 6.06 0 1 0 0-12.12a6.06 6.06 0 0 0 0 12.12"></svg:path><svg:path fill="#D3883E" d="M28.588 29.998c-.37 0-.74-.14-1.03-.43l-4.38-4.33c-.57-.57-.57-1.49 0-2.06s1.49-.57 2.06 0l4.38 4.33c.57.57.57 1.49 0 2.06c-.29.29-.66.43-1.03.43"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDangoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
