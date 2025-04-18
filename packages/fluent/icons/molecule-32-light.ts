import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMolecule32LightIcon],svg[fluent-molecule-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16a7 7 0 1 0-6.182-3.714l-2.755 2.143a5.5 5.5 0 1 0-.17 6.38l4.584 2.673a4.5 4.5 0 1 0 .546-.839l-4.602-2.684c.37-.74.579-1.575.579-2.459c0-.776-.16-1.514-.45-2.183l2.803-2.18A6.99 6.99 0 0 0 22 16m0-1a6 6 0 1 1 0-12a6 6 0 0 1 0 12M8.5 22a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9M25 25.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path>`,
})
export class FluentMolecule32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
