import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFigmaOutlineIcon],svg[teenyicons-figma-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 1v8.5m0 0v2a2 2 0 1 1-2-2m2 0h-2m0 0a2 2 0 1 1 0-4m0 0h2m-2 0h4m-4 0a2 2 0 1 1 0-4h4a2 2 0 1 1 0 4m0 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"></svg:path>`,
})
export class TeenyiconsFigmaOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
