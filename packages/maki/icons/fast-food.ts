import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiFastFoodIcon],svg[maki-fast-food-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h11a1 1 0 0 1 1 1M3.5 10H2a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3zM3 6H2V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v2zm8-1.5a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m-2-1a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m-2 1a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m-2-1a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m-2 1a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0"></svg:path>`,
})
export class MakiFastFoodIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
