import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelPlayIcon],svg[raphael-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.684 25.682L24.316 15.5L6.684 5.318z"></svg:path>`,
})
export class RaphaelPlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
