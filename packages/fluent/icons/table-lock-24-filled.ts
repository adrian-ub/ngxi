import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableLock24FilledIcon],svg[fluent-table-lock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 21H13v-4.5q0-.257.05-.5H9.5zM21 9.5v2.05a3.5 3.5 0 0 0-2.5-1.05a3.5 3.5 0 0 0-2.5 1.05V9.5zm-6.5 0v4.708a2.5 2.5 0 0 0-.5.292H9.5v-5zM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5zm12.5-1a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H21v-1a2.5 2.5 0 0 0-5 0v1zm2-1a1 1 0 1 1 2 0v1h-2zm2 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentTableLock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
