import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenQuartzIcon],svg[token-quartz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.9 16.95l-.9-.954l.936-.846H9.75l-4.5-4.5V9.3H6.6l4.5 4.603V7.95l.9-.9l.9.9v5.953L17.4 9.3h1.35v1.35l-4.5 4.5h5.85l.9.9l-.9.9h-6.75L12 15.6l-1.35 1.35z"></svg:path>`,
})
export class TokenQuartzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
