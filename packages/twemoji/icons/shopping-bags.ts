import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiShoppingBagsIcon],svg[twemoji-shopping-bags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F4900C" d="M11 0a8 8 0 0 0-8 8v8h2V8a6 6 0 0 1 12 0v8h2V8a8 8 0 0 0-8-8"></svg:path><svg:path fill="#DD2E44" d="m1 8l2 2l2-2l2 2l2-2l2 2l2-2l2 2l2-2l2 2l2-2v23H1z"></svg:path><svg:path fill="#FFCC4D" d="M25 5a8 8 0 0 0-8 8v8h2v-8a6 6 0 0 1 12 0v8h2v-8a8 8 0 0 0-8-8"></svg:path><svg:path fill="#744EAA" d="m15 13l2 2l2-2l2 2l2-2l2 2l2-2l2 2l2-2l2 2l2-2v23H15z"></svg:path>`,
})
export class TwemojiShoppingBagsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
