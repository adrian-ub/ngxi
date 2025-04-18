import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkDoubleIcon],svg[tdesign-bookmark-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 0l.003 18.419L21 16.415V2.001l-10.999.001v-2zM3 4h16v19.943l-8-5.714l-8 5.714zm2 2v14.057l6-4.286l6 4.286V6z"></svg:path>`,
})
export class TdesignBookmarkDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
