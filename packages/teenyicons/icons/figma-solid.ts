import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsFigmaSolidIcon],svg[teenyicons-figma-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.5a2.5 2.5 0 0 1-1-2c0-.818.393-1.544 1-2A2.5 2.5 0 0 1 5.5 1h4A2.5 2.5 0 0 1 11 5.5a2.5 2.5 0 0 1-3 4v2a2.5 2.5 0 1 1-4-2"></svg:path>`,
})
export class TeenyiconsFigmaSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
