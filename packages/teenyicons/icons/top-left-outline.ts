import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTopLeftOutlineIcon],svg[teenyicons-top-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1.5V1a.5.5 0 0 0-.5.5zm0 .5H7V1H1.5zM1 1.5V7h1V1.5zm.146.354l12 12l.707-.708l-12-12z"></svg:path>`,
})
export class TeenyiconsTopLeftOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
