import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugStackframeActiveIcon],svg[codicon-debug-stackframe-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="m14.5 7.15l-4.26-4.74L9.31 2H4.25L3 3.25v9.48l1.25 1.25h5.06l.93-.42l4.26-4.74zm-5.19 5.58H4.25V3.25h5.06l4.26 4.73z"></svg:path></svg:g>`,
})
export class CodiconDebugStackframeActiveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
