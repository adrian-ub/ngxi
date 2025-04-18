import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHeartStroke16Icon],svg[garden-heart-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M11.5 1.5c-1.5 0-2.8.9-3.5 2.1c-.7-1.2-2-2.1-3.5-2.1c-2.2 0-4 1.8-4 4c0 .7.2 1.4.5 2c2 3.5 7 8 7 8s5-4.5 7-8c.3-.6.5-1.3.5-2c0-2.2-1.8-4-4-4z"></svg:path>`,
})
export class GardenHeartStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
