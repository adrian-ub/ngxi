import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatMinibusIcon],svg[fluent-emoji-flat-minibus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M2.8 17.933L7.4 11.8A2 2 0 0 1 9 11h19a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4.667a4 4 0 0 1 .8-2.4"></svg:path><svg:path fill="#212121" d="M8.5 30a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m15 0a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path><svg:path fill="#fff" d="M8.5 28a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m15 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="#8D65C5" d="M2 20.333V21h28v-2H2.229A4 4 0 0 0 2 20.333"></svg:path><svg:path fill="#F92F60" d="M28 23a1 1 0 0 1 1-1h1v2h-1a1 1 0 0 1-1-1"></svg:path><svg:path fill="#FFB02E" d="M2 22a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z"></svg:path><svg:path fill="#00A6ED" d="m6.5 13l-3.7 4.933l-.05.067H8a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm23.51 0H19a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11.038zM12 13a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatMinibusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
