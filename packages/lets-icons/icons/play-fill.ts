import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsPlayFillIcon],svg[lets-icons-play-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.138 10.569L9.605 7.302A1.8 1.8 0 0 0 7 8.912v6.176a1.8 1.8 0 0 0 2.605 1.61l6.533-3.267c1.18-.59 1.18-2.272 0-2.862"></svg:path>`,
})
export class LetsIconsPlayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
