import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUndoIcon],svg[hugeicons-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.758 21.795c-5.38 0-9.75-4.37-9.75-9.75c0-.41.34-.75.75-.75s.75.34.75.75c0 4.55 3.7 8.25 8.25 8.25s8.25-3.7 8.25-8.25s-3.7-8.25-8.25-8.25c-2.7 0-5.2 1.3-6.75 3.5c.35 0 .82-.05 1.43-.11l2.04-.21a.75.75 0 0 1 .15 1.49l-2.04.21c-1.53.15-2.44.24-3.18-.37c-.72-.63-.79-1.53-.93-3.15l-.18-2.04c-.04-.41.27-.78.68-.81s.78.27.81.68l.18 2.05q.045.585.09 1.02a9.71 9.71 0 0 1 7.69-3.75c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
