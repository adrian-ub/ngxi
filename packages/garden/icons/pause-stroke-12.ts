import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPauseStroke12Icon],svg[garden-pause-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4 2v8m4-8v8"></svg:path>`,
})
export class GardenPauseStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
