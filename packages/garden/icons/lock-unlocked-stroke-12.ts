import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLockUnlockedStroke12Icon],svg[garden-lock-unlocked-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M3.5 5.5V3a2.5 2.5 0 0 1 5 0v.5"></svg:path><svg:rect width="9" height="6" x="1.5" y="5.5" rx=".5" ry=".5"></svg:rect></svg:g>`,
})
export class GardenLockUnlockedStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
