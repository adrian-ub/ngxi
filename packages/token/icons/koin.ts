import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenKoinIcon],svg[token-koin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.98L5 7.99v8.02l7 4.01l7-4.01V7.99zm8 3.52L12 3L4 7.5v9l8 4.5l8-4.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12 9l-2.5 1.475v3.05l2.5 1.474l2.5-1.475v-3.05zm3.5 1L12 8l-3.5 2v4l3.5 2l3.5-2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.5 12.2L4.26 8.123l.436-.74L12 11.5l7.13-4.11l.435.73L12.5 12.2v8.165h-1z"></svg:path>`,
})
export class TokenKoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
