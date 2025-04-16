import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGoogleadsIcon],svg[simple-icons-googleads-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 22.93a4 4 0 1 1 0-8a4 4 0 0 1 0 8m19.464-6.001l-8-13.857a4 4 0 0 0-6.93 4l8.001 13.857a4.001 4.001 0 0 0 6.93-4M7.514 4.844l-5.95 10.304A4.5 4.5 0 0 1 4 14.43c2.56-.008 4.625 2.158 4.494 4.715l3.217-5.573l-3.61-6.25a4.46 4.46 0 0 1-.587-2.478"></svg:path>`,
})
export class SimpleIconsGoogleadsIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
