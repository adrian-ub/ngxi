import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBarrierIcon],svg[carbon-barrier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M15 5h2v4h-2z" fill="currentColor"></svg:path><svg:path d="M15 11h2v4h-2z" fill="currentColor"></svg:path><svg:path d="M15 17h2v4h-2z" fill="currentColor"></svg:path><svg:path d="M15 23h2v4h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonBarrierIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
