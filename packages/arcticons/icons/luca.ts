import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLucaIcon],svg[arcticons-luca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.462 17.871v9.625c0 .825.55 1.375 1.375 1.375h.413m16.135-1.375c-.413.825-1.375 1.375-2.338 1.375h0a2.76 2.76 0 0 1-2.75-2.75v-1.787a2.76 2.76 0 0 1 2.75-2.75h0c.963 0 1.925.55 2.338 1.374m-8.412 3.163a2.76 2.76 0 0 1-2.75 2.75h0a2.76 2.76 0 0 1-2.75-2.75v-4.537m6.6 7.287c-.55 0-1.1-.55-1.1-1.1v-6.187m16.465 4.537a2.76 2.76 0 0 1-2.75 2.75h0a2.76 2.76 0 0 1-2.75-2.75v-1.787a2.76 2.76 0 0 1 2.75-2.75h0a2.76 2.76 0 0 1 2.75 2.75"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.538 28.871c-.55 0-1.1-.55-1.1-1.1v-6.187"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path>`,
})
export class ArcticonsLucaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
