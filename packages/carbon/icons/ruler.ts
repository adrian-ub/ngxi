import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRulerIcon],svg[carbon-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1m-1 10H4v-8h4v4h2v-4h5v4h2v-4h5v4h2v-4h4Z"></svg:path>`,
})
export class CarbonRulerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
