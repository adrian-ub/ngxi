import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPinboardIcon],svg[simple-icons-pinboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.352 14.585l-4.509 4.614l.72-4.062L3.428 7.57L0 7.753L7.58 0v2.953l7.214 6.646l4.513-1.105l-4.689 4.982L24 24z"></svg:path>`,
})
export class SimpleIconsPinboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
