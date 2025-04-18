import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonAlexaIcon],svg[arcticons-amazon-alexa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.15 13.882v8.956a1.21 1.21 0 0 0 1.279 1.28h.383m6.006-1.279a2.48 2.48 0 0 1-2.175 1.279h0a2.567 2.567 0 0 1-2.559-2.559v-1.663a2.567 2.567 0 0 1 2.56-2.56h0a2.567 2.567 0 0 1 2.558 2.56v.896h-5.118m11.54-3.461l-5.118 6.781m5.118 0l-5.118-6.781m-11.388 4.222a2.566 2.566 0 0 1-2.56 2.559h0A2.566 2.566 0 0 1 10 21.552V19.89a2.566 2.566 0 0 1 2.559-2.559h0a2.566 2.566 0 0 1 2.559 2.559m0 4.222v-6.781M38 21.553a2.566 2.566 0 0 1-2.559 2.559h0a2.566 2.566 0 0 1-2.559-2.56V19.89a2.566 2.566 0 0 1 2.56-2.559h0A2.566 2.566 0 0 1 38 19.89m0 4.222v-6.781"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17 17 0 0 0 10.167-3.08"></svg:path>`,
})
export class ArcticonsAmazonAlexaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
