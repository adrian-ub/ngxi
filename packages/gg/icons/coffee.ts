import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCoffeeIcon],svg[gg-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"></svg:path><svg:path fill-rule="evenodd" d="M13 21.5a6 6 0 0 0 5.917-5H19a4 4 0 0 0 0-8v-1H1v8a6 6 0 0 0 6 6zM3 9.5v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6zm18 3a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path><svg:path d="M9 3.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm5-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"></svg:path></svg:g>`,
})
export class GgCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
