import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLockLockedFill16Icon],svg[garden-lock-locked-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="12" height="9" x="2" y="7" fill="currentColor" rx="1" ry="1"></svg:rect><svg:path fill="none" stroke="currentColor" d="M4.5 7.5V4a3.5 3.5 0 0 1 7 0v3.5"></svg:path>`,
})
export class GardenLockLockedFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
