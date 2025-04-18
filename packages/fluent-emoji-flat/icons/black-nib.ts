import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBlackNibIcon],svg[fluent-emoji-flat-black-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="m14.581 10.341l4.938 2.15l2.133 4.921l-3.257 6.516a5 5 0 0 1-3.103 2.573L3.68 29.806a1.203 1.203 0 0 1-1.487-1.486l3.3-11.616a5 5 0 0 1 2.574-3.106z"></svg:path><svg:path fill="#433B6B" d="M18.121 2.565a2 2 0 0 1 2.829 0l8.485 8.485a2 2 0 0 1 0 2.829L25.9 17.414l-6.903-4.496L14.586 6.1z"></svg:path><svg:path fill="#FFB02E" d="M14.586 6.1L25.9 17.415a3 3 0 0 1-4.243 0l-7.071-7.07a3 3 0 0 1 0-4.243"></svg:path><svg:path fill="#635994" d="M11.171 22.243a3.001 3.001 0 0 0 3.415-4.829a3 3 0 0 0-4.83 3.415l-7.32 7.32a1 1 0 1 0 1.414 1.415z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBlackNibIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
