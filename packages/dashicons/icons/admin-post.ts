import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsAdminPostIcon],svg[dashicons-admin-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.44 3.02l1.82-1.82l6.36 6.35l-1.83 1.82a2.73 2.73 0 0 0-3.41.36l-.75.75c-.92.93-1.04 2.35-.35 3.41l-1.83 1.82l-2.41-2.41l-2.8 2.79c-.42.42-3.38 2.71-3.8 2.29s1.86-3.39 2.28-3.81l2.79-2.79L4.1 9.36l1.83-1.82c1.05.69 2.48.57 3.4-.36l.75-.75c.93-.92 1.05-2.35.36-3.41"></svg:path>`,
})
export class DashiconsAdminPostIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
