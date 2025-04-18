import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRazorIcon],svg[openmoji-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M32.5 22.5s0 38 1 42s4 4 5 0c2.03-8.123 1-42 1-42m-17-7s10 5 10 7h7c0-1.699 7.214-5.562 9.388-6.687c.385-.2.612-.313.612-.313Z"></svg:path><svg:rect width="32" height="9" x="20" y="6.5" fill="#d0cfce" rx="2.244" ry="2.244"></svg:rect><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path stroke-linecap="round" d="M32.5 22.5s0 38 1 42s4 4 5 0c2.03-8.123 1-42 1-42"></svg:path><svg:rect width="32" height="9" x="20" y="6.5" stroke-linecap="round" rx="2.244" ry="2.244"></svg:rect><svg:path stroke-linecap="round" d="M22.5 15.5s10 5 10 7m7 0c0-1.699 7.214-5.562 9.388-6.687c.385-.2.612-.313.612-.313"></svg:path><svg:path d="M20 11h32"></svg:path></svg:g>`,
})
export class OpenmojiRazorIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
