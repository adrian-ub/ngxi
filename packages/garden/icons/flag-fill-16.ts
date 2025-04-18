import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFlagFill16Icon],svg[garden-flag-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M2.5 15.5V.5"></svg:path><svg:path fill="currentColor" d="M13.29 9H4V1h9.29c.41 0 .77.24.92.62s.07.8-.22 1.09L11.71 5L14 7.29A1.002 1.002 0 0 1 13.29 9"></svg:path>`,
})
export class GardenFlagFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
