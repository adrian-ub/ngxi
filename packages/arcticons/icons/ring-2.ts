import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRing2Icon],svg[arcticons-ring-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 21.574v7.986a3.52 3.52 0 0 1-3.518 3.519h0a3.5 3.5 0 0 1-2.488-1.03"></svg:path><svg:rect width="7.037" height="10.274" x="28.963" y="18.055" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.518" ry="3.518" transform="rotate(180 32.482 23.192)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 21.574c0-.972.394-1.851 1.03-2.488s1.517-1.03 2.488-1.03h0M12 21.574v6.755"></svg:path><svg:circle cx="17.525" cy="15.645" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.525 18.055v10.274m9.253 0v-6.755a3.52 3.52 0 0 0-3.518-3.519h0a3.52 3.52 0 0 0-3.518 3.519v6.755"></svg:path>`,
})
export class ArcticonsRing2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
