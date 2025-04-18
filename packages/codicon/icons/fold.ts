import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFoldIcon],svg[codicon-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.952 2.381L7.976 6.357L4 2.381L3.38 3l4.286 4.285h.619L12.57 3zM3.904 14l4.072-4.072L12.047 14l.62-.619L8.284 9h-.619l-4.381 4.381z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFoldIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
