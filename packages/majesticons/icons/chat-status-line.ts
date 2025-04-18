import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsChatStatusLineIcon],svg[majesticons-chat-status-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 3.512a9.03 9.03 0 0 1 5.5 5.523M11 3.055a9 9 0 0 0-6.605 13.76L3 21l4.185-1.395A9 9 0 0 0 20.945 13"></svg:path><svg:path d="M12 17a5 5 0 0 1-5-5m2-4a5 5 0 0 1 7 7"></svg:path><svg:circle cx="12" cy="12" r="1"></svg:circle></svg:g>`,
})
export class MajesticonsChatStatusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
