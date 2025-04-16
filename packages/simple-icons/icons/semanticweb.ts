import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSemanticwebIcon],svg[simple-icons-semanticweb-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.602 0s-1.524 5.809-8.516 2.658c-.776-.35-.954-.444-.982-.469L2.074 6.301l10.043 4.896s.776-.326 2.026-.933C20.273 7.287 21.602 0 21.602 0M1.59 8.486v10.448L10.947 24V13.242zm20.82 0l-9.357 4.756V24l9.357-5.066z"></svg:path>`,
})
export class SimpleIconsSemanticwebIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
