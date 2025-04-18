import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarWidget6BrokenIcon],svg[solar-widget-6-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2.5 6.5a4 4 0 0 0 4 4h2.667c.31 0 .465 0 .592-.034a1 1 0 0 0 .707-.707c.034-.127.034-.282.034-.592V6.5a4 4 0 0 0-4-4m11 19a4 4 0 0 1-4-4v-2.667c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 0 1 4 4"></svg:path><svg:path d="M2.5 17.5a4 4 0 0 1 4-4h2.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.109.214.109.494.109 1.054v2.4a4 4 0 0 1-8 0Zm11-11a4 4 0 1 1 4 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 0 1-.882-.882c-.006-.056-.006-.122-.006-.255z"></svg:path></svg:g>`,
})
export class SolarWidget6BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
