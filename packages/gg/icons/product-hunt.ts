import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggProductHuntIcon],svg[gg-product-hunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 1 1 0-14a7 7 0 0 1 0 14m-9-7a9 9 0 1 1 18 0a9 9 0 0 1-18 0m6 4V8h4a3 3 0 1 1 0 6h-2v2zm5-5a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path>`,
})
export class GgProductHuntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
