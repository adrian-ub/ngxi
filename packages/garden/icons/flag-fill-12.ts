import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFlagFill12Icon],svg[garden-flag-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M1.5 11.5V.5"></svg:path><svg:path fill="currentColor" d="M10.79 7H3V1h7.79c.45 0 .67.54.35.85L9 4l2.15 2.15a.5.5 0 0 1-.36.85"></svg:path>`,
})
export class GardenFlagFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
