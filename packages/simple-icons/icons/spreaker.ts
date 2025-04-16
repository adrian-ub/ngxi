import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSpreakerIcon],svg[simple-icons-spreaker-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.615 0l-5.64 6.54L.529 4.718l8.68 7.372l-8.537 7.463l8.411-1.984L14.843 24l.71-8.601l7.918-3.483l-7.963-3.33L14.621 0z"></svg:path>`,
})
export class SimpleIconsSpreakerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
