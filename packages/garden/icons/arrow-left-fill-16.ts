import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenArrowLeftFill16Icon],svg[garden-arrow-left-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1 8.5h14.5"></svg:path><svg:path fill="currentColor" d="M5.15 13.65L.71 9.21a.996.996 0 0 1 0-1.41l4.44-4.44c.31-.32.85-.1.85.35v9.59a.5.5 0 0 1-.85.35"></svg:path>`,
})
export class GardenArrowLeftFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
