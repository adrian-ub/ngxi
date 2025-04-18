import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoorLockIcon],svg[hugeicons-door-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22h18M4 22V6c0-3.31.79-4 4.571-4h6.858C19.21 2 20 2.69 20 6v16"></svg:path><svg:path d="M13.92 11.759V9.854c0-1.022-.86-1.85-1.92-1.85s-1.92.828-1.92 1.85v1.905M15 14.084c0 1.611-1.354 2.92-3 2.92s-3-1.309-3-2.92c0-1.71 1.354-3.01 3-3.01s3 1.3 3 3.01"></svg:path></svg:g>`,
})
export class HugeiconsDoorLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
