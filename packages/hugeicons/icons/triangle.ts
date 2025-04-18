import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTriangleIcon],svg[hugeicons-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.593 9.225c2.246-3.602 3.368-5.403 4.84-5.945a4.53 4.53 0 0 1 3.134 0c1.472.542 2.594 2.343 4.84 5.945c2.527 4.053 3.79 6.08 3.568 7.753a4.66 4.66 0 0 1-1.599 2.938C19.1 21 16.733 21 12 21s-7.1 0-8.376-1.084a4.66 4.66 0 0 1-1.599-2.938c-.222-1.673 1.041-3.7 3.568-7.753" color="currentColor"></svg:path>`,
})
export class HugeiconsTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
