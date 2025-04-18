import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonYIcon],svg[carbon-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 9h-2l-2 7l-2-7h-2l3 9v5h2v-5l3-9z" fill="currentColor"></svg:path>`,
})
export class CarbonYIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
