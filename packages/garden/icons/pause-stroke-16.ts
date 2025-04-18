import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPauseStroke16Icon],svg[garden-pause-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 2v12m6-12v12"></svg:path>`,
})
export class GardenPauseStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
