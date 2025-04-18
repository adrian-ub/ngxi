import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAtStroke16Icon],svg[garden-at-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M11.5 4.5V8h0A3.5 3.5 0 0 1 8 11.5h0A3.5 3.5 0 0 1 4.5 8h0A3.5 3.5 0 0 1 8 4.5h0A3.5 3.5 0 0 1 11.5 8h0v1.5a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V8h0A7.5 7.5 0 0 0 8 .5h0A7.5 7.5 0 0 0 .5 8h0A7.5 7.5 0 0 0 8 15.5h3.41"></svg:path>`,
})
export class GardenAtStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
