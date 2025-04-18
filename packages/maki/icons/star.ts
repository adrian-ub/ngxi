import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiStarIcon],svg[maki-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 0l-2 5h-5l4 3.5l-2 6l5-3.5l5 3.5l-2-6l4-3.5h-5z"></svg:path>`,
})
export class MakiStarIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
