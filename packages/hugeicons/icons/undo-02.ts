import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUndo02Icon],svg[hugeicons-undo-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.988 2.557c-3.3 0-6.37 1.7-8.17 4.46c-.08-.56-.08-1.35-.08-2.42v-1.28c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.28c0 2.35 0 3.64.98 4.46c.48.41 1.05.56 1.78.56s1.62-.15 2.78-.34l1.34-.22c.41-.07.69-.45.62-.86a.755.755 0 0 0-.86-.62l-1.34.22c-1.18.2-2.05.34-2.63.32a8.29 8.29 0 0 1 7.1-4.05c4.55 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25c-.41 0-.75.34-.75.75s.34.75.75.75c5.38 0 9.75-4.37 9.75-9.75s-4.39-9.76-9.77-9.76" color="currentColor"></svg:path>`,
})
export class HugeiconsUndo02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
