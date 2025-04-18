import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinesIcon],svg[arcticons-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 19.4v9.2h4.6m2.5-9.2v9.2m11.2 0h4.5m-4.5-9.2h4.5M26.8 24h2.9m-2.9-4.6v9.2m-8.6 0v-9.2l6 9.2v-9.2m9.4 8.2c.6.7 1.3 1 2.2 1h1.3c1.3 0 2.3-1 2.3-2.3h0c0-1.3-1-2.3-2.3-2.3h-1.5c-1.3 0-2.3-1-2.3-2.3h0c0-1.3 1-2.3 2.3-2.3h1.3c1 0 1.7.3 2.2 1"></svg:path>`,
})
export class ArcticonsLinesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
