import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVectorlogozoneIcon],svg[simple-icons-vectorlogozone-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.458 0l-5.311 2.024l1.989.534l-4.847 16.085l-4.867-16.25H1.48L8.974 24h4.645l7.043-20.226l1.858.499Z"></svg:path>`,
})
export class SimpleIconsVectorlogozoneIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
