import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiExcerptIcon],svg[oi-excerpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h7V0zm0 2v1h5V2zm0 2v1h8V4zm0 2v1h1V6zm2 0v1h1V6zm2 0v1h1V6z"></svg:path>`,
})
export class OiExcerptIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
