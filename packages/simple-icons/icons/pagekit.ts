import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPagekitIcon],svg[simple-icons-pagekit-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0z"></svg:path>`,
})
export class SimpleIconsPagekitIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
