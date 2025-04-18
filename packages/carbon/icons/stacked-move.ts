import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStackedMoveIcon],svg[carbon-stacked-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 28H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2zM4 11v15h11V11z" fill="currentColor"></svg:path><svg:path d="M26 6l-1.41 1.41L27 10h-5V6a2 2 0 0 0-2-2H10v2h10v14h2v-8h5l-2.41 2.59L26 16l5-5z" fill="currentColor"></svg:path>`,
})
export class CarbonStackedMoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
