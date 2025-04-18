import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSonyLivIcon],svg[arcticons-sony-liv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 10.73a10 10 0 0 0 6.915 9.512l23.17 7.515a10 10 0 0 1 6.915 9.512M24.816 17v-7l4.638 7v-7m6.583 0l-2.319 3.5l-2.319-3.5m2.319 7v-3.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.102 16.233c.429.559.967.767 1.716.767h1.036c.965 0 1.747-.782 1.747-1.746v-.008c0-.964-.782-1.746-1.747-1.746h-1.143a1.75 1.75 0 0 1-1.748-1.748h0c0-.968.784-1.752 1.752-1.752h1.03c.75 0 1.288.208 1.717.767"></svg:path><svg:rect width="4.638" height="7" x="18.233" y="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.319" ry="2.319"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.611 31.249L27.875 38.5l-2.736-7.251"></svg:path><svg:circle cx="22.187" cy="27.897" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.187 31.249V38.5m-4.798-10.945v9.577c0 .756.612 1.368 1.368 1.368h.41"></svg:path>`,
})
export class ArcticonsSonyLivIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
