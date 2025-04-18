import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXmrIcon],svg[token-xmr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a8.99 8.99 0 0 1 8.543 11.813h-2.918V7.288l-5.633 5.869l-5.617-5.861v7.517H3.457A8.9 8.9 0 0 1 3 12.008C3 7.03 7.026 3 12 3m.025 12.822l3.912-3.914V16.5h3.749C18.022 19.246 15.254 21.002 12 21c-3.244 0-6.098-1.91-7.686-4.5h3.748v-4.592z"></svg:path>`,
})
export class TokenXmrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
