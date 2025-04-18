import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBrickIcon],svg[fluent-emoji-flat-brick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D3D3D3" d="M2 5a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v22a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#FF6723" d="M2 15h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H2zm0 8v-6h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm13 7v-4a1 1 0 0 0-1-1H2v2a3 3 0 0 0 3 3zm15-5H18a1 1 0 0 0-1 1v4h10a3 3 0 0 0 3-3zm0-8v6h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0-8H18a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12zm-5-7v4a1 1 0 0 0 1 1h4V5a3 3 0 0 0-3-3zM9 2v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM7 2H5a3 3 0 0 0-3 3v2h4a1 1 0 0 0 1-1zm3 15a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBrickIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
