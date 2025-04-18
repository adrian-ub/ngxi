import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatPaintbrushIcon],svg[fluent-emoji-flat-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFB02E" d="m11.955 22.014l-1.453-1.46a3 3 0 0 0-3.838-.346l-.68.473a3 3 0 0 0-1.286 2.368l-.034 1.042a3 3 0 0 1-.994 2.138l-.5.448a.1.1 0 0 0-.03.054a.475.475 0 0 0 .33.54l2.578.783l.387.07a6.01 6.01 0 0 0 5.698-2.071a3.005 3.005 0 0 0-.178-4.04"></svg:path><svg:path fill="#D3D3D3" d="m11.382 17.087l3.905.507l.31 3.763l-1.78 1.756a1 1 0 0 1-1.414-.01l-2.81-2.846a1 1 0 0 1 .01-1.414z"></svg:path><svg:path fill="#F92F60" d="m11.382 17.087l4.215 4.27L28.808 7.694a2.559 2.559 0 0 0-3.594-3.641z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatPaintbrushIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
