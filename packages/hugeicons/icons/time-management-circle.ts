import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeManagementCircleIcon],svg[hugeicons-time-management-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m15 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M19.5 17c-.168-2.453-1.105-3-4.273-3H8.773c-3.168 0-4.105.547-4.273 3M12 6.5L13 5m3.5 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path></svg:g>`,
})
export class HugeiconsTimeManagementCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
