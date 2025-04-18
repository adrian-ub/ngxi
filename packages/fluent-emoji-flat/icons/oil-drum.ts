import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatOilDrumIcon],svg[fluent-emoji-flat-oil-drum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M25 6H7v22h18z"></svg:path><svg:path fill="#212121" d="M23.02 2h-3.03c-.55 0-.99.44-.99.98V4h5V2.98c0-.54-.44-.98-.98-.98"></svg:path><svg:path fill="#26EAFC" d="M20 6h1v22h-1zm2 0h2v22h-2z"></svg:path><svg:path fill="#0074BA" d="M7 6h18c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1m0 24h18c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1m18-16H7c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1M7 22h18c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path></svg:g>`,
})
export class FluentEmojiFlatOilDrumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
