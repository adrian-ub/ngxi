import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCloseSmallIcon],svg[ix-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m347.581 134.248l30.17 30.17l-91.582 91.581l91.582 91.582l-30.17 30.17L256 286.17l-91.581 91.582l-30.17-30.17L225.83 256l-91.582-91.581l30.17-30.17l91.581 91.582z"></svg:path>`,
})
export class IxCloseSmallIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
