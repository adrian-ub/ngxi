import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatIceSkateIcon],svg[fluent-emoji-flat-ice-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#BEBEBE" d="m21.22 15.9l-5.64-2.32c-.9-.48-1.44-.91-1.44-1.76V5.71c0-.39-.32-.71-.71-.71H5.22c-.39 0-.71.32-.71.71v11.81L5 18l6 2.5h14.38l.37-.24v.01h.01c-.037-2.454-1.766-3.189-3.93-4.109q-.3-.127-.61-.261m6 9.47v-.69c0-.77.63-1.39 1.38-1.39c.77 0 1.4.63 1.4 1.4v.69c0 2.58-2.09 4.67-4.67 4.67H3.4c-.77 0-1.4-.63-1.4-1.4s.63-1.4 1.4-1.4h1.14c.61 0 1.11-.5 1.11-1.11v-1.65h2.79v1.65c0 .61.5 1.11 1.11 1.11h9.87c.61 0 1.11-.5 1.11-1.11v-1.65h2.79v1.65c0 .61.5 1.11 1.11 1.11h.91c1.04 0 1.88-.84 1.88-1.88"></svg:path><svg:path fill="#635994" d="M25.75 22.56v-2.3l-14.91-.1c-.21 0-.39-.12-.48-.31l-.51-1.09a2.15 2.15 0 0 0-1.94-1.24h-3.4v6.54c0 .29.24.53.53.53h4.75c.29 0 .53-.24.53-.53v-.99c0-.29.23-.52.52-.52H14c.29 0 .52.23.52.52v.99c0 .29.24.53.53.53h10.19c.29 0 .53-.24.53-.53z"></svg:path><svg:path fill="#636363" d="M10.54 7a.5.5 0 0 0 0 1h3.77a.5.5 0 1 0 0-1zm0 3a.5.5 0 0 0 0 1h3.77a.5.5 0 1 0 0-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatIceSkateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
