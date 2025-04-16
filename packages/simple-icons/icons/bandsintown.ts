import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBandsintownIcon],svg[simple-icons-bandsintown-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.399 12.8v4.8H19.2v1.6H4.799V0H0v24h24V12.8zm4.801-8H6.399v6.4H11.2zm6.4 0h-4.8v6.4h4.8zM24 0h-4.8v11.2H24z"></svg:path>`,
})
export class SimpleIconsBandsintownIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
