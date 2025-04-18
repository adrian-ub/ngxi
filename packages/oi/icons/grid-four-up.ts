import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiGridFourUpIcon],svg[oi-grid-four-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h1V0zm2 0v1h1V0zm2 0v1h1V0zm2 0v1h1V0zM0 2v1h1V2zm2 0v1h1V2zm2 0v1h1V2zm2 0v1h1V2zM0 4v1h1V4zm2 0v1h1V4zm2 0v1h1V4zm2 0v1h1V4zM0 6v1h1V6zm2 0v1h1V6zm2 0v1h1V6zm2 0v1h1V6z"></svg:path>`,
})
export class OiGridFourUpIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
