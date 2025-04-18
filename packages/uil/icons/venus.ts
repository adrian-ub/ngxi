import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilVenusIcon],svg[uil-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9a7 7 0 1 0-8 6.92V18h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2h-1v-2.08A7 7 0 0 0 19 9m-7 5a5 5 0 1 1 5-5a5 5 0 0 1-5 5"></svg:path>`,
})
export class UilVenusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
