import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUndoIcon],svg[jam-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.308 7.612l1.352-.923a.98.98 0 0 1 1.372.27a1.01 1.01 0 0 1-.266 1.388l-3.277 2.237a.98.98 0 0 1-1.372-.27L.907 6.998a1.007 1.007 0 0 1 .266-1.389a.98.98 0 0 1 1.372.27l.839 1.259C4.6 3.01 8.38 0 12.855 0c5.458 0 9.882 4.477 9.882 10s-4.424 10-9.882 10a.994.994 0 0 1-.988-1c0-.552.443-1 .988-1c4.366 0 7.906-3.582 7.906-8s-3.54-8-7.906-8C9.311 2 6.312 4.36 5.308 7.612"></svg:path>`,
})
export class JamUndoIcon {
  readonly viewBox = input("-0.5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
