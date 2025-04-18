import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMagicIcon],svg[jam-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.243 7.172l3.535-3.536l-.707-.707l-3.535 3.535zm-1.415 1.414l-.707-.707L2.93 17.07l.707.707l9.192-9.192zm4.95-7.778l2.121 2.12a1 1 0 0 1 0 1.415L4.343 19.9a1 1 0 0 1-1.414 0L.808 17.78a1 1 0 0 1 0-1.415L16.364.808a1 1 0 0 1 1.414 0M8.586.1l1.393.704L11.414.1l-.68 1.46l.68 1.368l-1.384-.664l-1.444.664l.689-1.42zm9.9 7.07l1.393.705l1.435-.704l-.68 1.46l.68 1.368l-1.384-.664l-1.445.664l.69-1.42l-.69-1.408z"></svg:path>`,
})
export class JamMagicIcon {
  readonly viewBox = input("-1 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
