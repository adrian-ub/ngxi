import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLockUnlockedStroke16Icon],svg[garden-lock-unlocked-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M4.5 7V4a3.5 3.5 0 0 1 7 0v.5"></svg:path><svg:rect width="11" height="8" x="2.5" y="7.5" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenLockUnlockedStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
