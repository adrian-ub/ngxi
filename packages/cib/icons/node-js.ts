import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibNodeJsIcon],svg[cib-node-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.245.203l-12.49 7.24a1.5 1.5 0 0 0-.75 1.313V23.24c0 .542.286 1.042.75 1.307l12.495 7.25a1.5 1.5 0 0 0 1.505 0l12.49-7.245c.464-.271.75-.771.75-1.307V8.755c0-.542-.286-1.042-.755-1.313L16.756.202a1.5 1.5 0 0 0-1.505 0z"></svg:path>`,
})
export class CibNodeJsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
