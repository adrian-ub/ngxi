import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHotwireIcon],svg[simple-icons-hotwire-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.764 6.917l-3.48.81L16.32 0L7.236 11.705l4.334-.854l-4.087 7.982l2.364-.532L7.456 24l7.51-8.111l-2.77.64z"></svg:path>`,
})
export class SimpleIconsHotwireIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
