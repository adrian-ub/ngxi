import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdblockbrowserIcon],svg[arcticons-adblockbrowser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.59 30.6v-1.8l-1.8-3.4l-.1-2.4l-2.3-1.4l-1.6.5l-2.4-.8l-.1-.3l2.5-2.5l.4.8l3.4.7l3.7-1.3a14 14 0 0 1-.8 12.9zm-16.2-1.8l2.3-2.3h2l1.5 2.4l1.4.1l-.2 1.1l-2 1.9l-.1 1.5l-1.9 1.3l-.1 1l-.5-1v-5.6z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35 13.7l-4.4-4.4H17.89l-8.6 8.6v12.8l4.3 4.3c14.8 13.6 35-6.6 21.4-21.3z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29c0 1.105.448 2.105 1.172 2.828L41.328 6.672A4 4 0 0 0 38.5 5.5"></svg:path>`,
})
export class ArcticonsAdblockbrowserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
