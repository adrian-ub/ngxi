import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosStenciljsIconIcon],svg[logos-stenciljs-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m193.065 138.495l-53.333 58.428H41.599L94.4 138.495zM256 69.248l-53.305 58.427H0l53.305-58.427zM214.399 0l-53.087 58.428h-98.38L116.1 0z"></svg:path>`,
})
export class LogosStenciljsIconIcon {
  readonly viewBox = input("0 0 256 197")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
