import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatScrollIcon],svg[fluent-emoji-flat-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFDEA7" d="M23.51 2.01H8.6V2H4.45v3h2.5v22.07c0 1.62 1.32 2.94 2.94 2.94h15.67c.77 0 1.39-.62 1.39-1.39V5.45c0-1.9-1.54-3.44-3.44-3.44"></svg:path><svg:path fill="#E19747" d="M10.86 29.99s2.24-.33 2.73-2.5c.07-.3.41-.52.81-.52h14.73c.52 0 .91.36.82.74c-.23.89-.6 2.29-4.37 2.29c-5.57 0-14.72-.01-14.72-.01"></svg:path><svg:path fill="#D3883E" d="M6.95 5c0-1.66-1.12-3-2.5-3c-1.19 0-2.18 1-2.44 2.33c-.06.34.15.67.44.67zm3.47 6.87a.5.5 0 1 0 0 1H23.5a.5.5 0 0 0 0-1zm-.44 3.46a.5.5 0 0 1 .5-.5H23.5a.5.5 0 0 1 0 1H10.48a.5.5 0 0 1-.5-.5m.5 2.52a.5.5 0 1 0 0 1H23.5a.5.5 0 0 0 0-1zm.03 2.98a.5.5 0 1 0 0 1h7.96a.5.5 0 1 0 0-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatScrollIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
