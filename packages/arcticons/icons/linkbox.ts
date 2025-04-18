import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinkboxIcon],svg[arcticons-linkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:rect width="24.295" height="15.857" x="11.835" y="16.087" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7.928" ry="7.928"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.894 22.206h4.173c.977 0 1.77.792 1.77 1.77h0a1.77 1.77 0 0 1-1.77 1.768h-4.173a1.77 1.77 0 0 1-1.769-1.769h0a1.77 1.77 0 0 1 1.77-1.769"></svg:path>`,
})
export class ArcticonsLinkboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
