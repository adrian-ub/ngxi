import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRoundPushpinIcon],svg[fluent-emoji-flat-round-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M15.93 29.92c-.56 0-1.01-.45-1.01-1.01V15.94h2.03V28.9c-.01.57-.46 1.02-1.02 1.02"></svg:path><svg:path fill="#F70A8D" d="M15.93 17.86a7.93 7.93 0 1 0 0-15.86a7.93 7.93 0 0 0 0 15.86"></svg:path><svg:path fill="#fff" d="M16.5 5.41c-1.04 1.04-1.09 2.66-.12 3.63s2.6.92 3.63-.12c1.04-1.04 1.09-2.66.12-3.63s-2.6-.92-3.63.12"></svg:path></svg:g>`,
})
export class FluentEmojiFlatRoundPushpinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
