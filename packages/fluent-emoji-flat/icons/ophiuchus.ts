import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatOphiuchusIcon],svg[fluent-emoji-flat-ophiuchus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M11 8a1 1 0 1 0-2 0v4.452A7.67 7.67 0 0 0 4.2 15.4a1 1 0 1 0 1.6 1.2A5.67 5.67 0 0 1 9 14.495V18c0 3.862 3.138 7 7 7s7-3.138 7-7v-.442a7.67 7.67 0 0 0 4.8-2.947a1 1 0 0 0-1.6-1.202a5.67 5.67 0 0 1-3.2 2.107V8a1 1 0 1 0-2 0v7.637a5.7 5.7 0 0 1-1.328-.323l-6.64-2.49A7.7 7.7 0 0 0 11 12.363zm0 6.373c.447.053.893.16 1.329.323l6.64 2.49c.665.25 1.348.402 2.031.461V18c0 2.758-2.242 5-5 5s-5-2.242-5-5z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatOphiuchusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
