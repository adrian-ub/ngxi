import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiHighlightIcon],svg[ooui-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.14 2.27a1 1 0 0 0-1.41 0l-10 10a1 1 0 0 0 0 1.41L4 14l-3 4h5l1-1l.29.29a1 1 0 0 0 1.41 0l10-10a1 1 0 0 0 .03-1.43zM7 15l-2-2l9-9l2 2z"></svg:path>`,
})
export class OouiHighlightIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
