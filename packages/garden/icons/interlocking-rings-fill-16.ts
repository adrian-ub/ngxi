import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInterlockingRingsFill16Icon],svg[garden-interlocking-rings-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 12.5c-2.2-.1-4-2-4-4.2C1 5.9 2.9 4 5.2 4s4.1 1.8 4.2 4M11 4c2.2.1 4 2 4 4.2c0 2.3-1.9 4.2-4.2 4.2s-4.2-1.9-4.2-4.2V8"></svg:path>`,
})
export class GardenInterlockingRingsFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
