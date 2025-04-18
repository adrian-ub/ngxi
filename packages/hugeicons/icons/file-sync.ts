import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileSyncIcon],svg[hugeicons-file-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 12.182V7.818c0-1.693 0-2.54-.268-3.216c-.43-1.087-1.342-1.944-2.497-2.35C16.517 2 15.617 2 13.818 2c-3.148 0-4.722 0-5.98.441c-2.02.71-3.615 2.21-4.37 4.113C3 7.737 3 9.219 3 12.182v2.545c0 3.07 0 4.604.848 5.67q.366.461.855.805c1.045.736 2.514.793 5.297.798"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2m-1 15l1.023.594c.514-1.866 2.488-2.974 4.409-2.474a3.58 3.58 0 0 1 2.218 1.686M21 20l-1.023-.594c-.514 1.866-2.488 2.974-4.409 2.474a3.58 3.58 0 0 1-2.186-1.63"></svg:path></svg:g>`,
})
export class HugeiconsFileSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
