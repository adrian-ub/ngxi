import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonWarningMultipleIcon],svg[carbon-warning-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 23h-4v-2h2.382L19.5 5.236l-1.105 2.211l-1.79-.894l2-4c.17-.339.532-.553.895-.553s.725.214.894.553l9.5 19A1 1 0 0 1 29 23"></svg:path><svg:circle cx="14" cy="25" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 15h2v7h-2z"></svg:path><svg:path fill="currentColor" d="M25 30H3a1 1 0 0 1-.886-1.464l11-21c.173-.33.53-.536.886-.536s.713.206.886.536l11 21A1 1 0 0 1 25 30M4.653 28h18.694L14 10.155z"></svg:path>`,
})
export class CarbonWarningMultipleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
