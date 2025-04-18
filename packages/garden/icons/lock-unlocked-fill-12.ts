import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLockUnlockedFill12Icon],svg[garden-lock-unlocked-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M3.5 5.5V3a2.5 2.5 0 0 1 5 0v.5"></svg:path><svg:rect width="10" height="7" x="1" y="5" fill="currentColor" rx="1" ry="1"></svg:rect>`,
})
export class GardenLockUnlockedFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
