import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPlay26Icon],svg[garden-play-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13" cy="13" r="11" fill="none" stroke="currentColor" stroke-width="2"></svg:circle><svg:path fill="currentColor" d="m17 13l-6 4V9"></svg:path>`,
})
export class GardenPlay26Icon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
