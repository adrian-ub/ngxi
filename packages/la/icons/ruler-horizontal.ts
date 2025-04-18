import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRulerHorizontalIcon],svg[la-ruler-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8v16h32V8zm2 2h3v7h2v-7h2v4h2v-4h2v7h2v-7h2v4h2v-4h2v7h2v-7h2v4h2v-4h3v12H2z"></svg:path>`,
})
export class LaRulerHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
