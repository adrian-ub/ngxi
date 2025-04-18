import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXaiIcon],svg[token-xai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.669 16.716H8.332l2.614-4.53L9.17 9.11L3 19.794h18L12 4.206l-1.777 3.078z" clip-rule="evenodd"></svg:path>`,
})
export class TokenXaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
