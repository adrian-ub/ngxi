import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenInterlockingRingsStroke16Icon],svg[garden-interlocking-rings-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M6.5 12.2q-.75.3-1.5.3C2.5 12.5.5 10.5.5 8s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .7-.2 1.4-.5 2m.6-6.3c.4-.1.9-.2 1.4-.2c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5s-4.5-2-4.5-4.5c0-.7.2-1.4.5-2"></svg:path>`,
})
export class GardenInterlockingRingsStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
