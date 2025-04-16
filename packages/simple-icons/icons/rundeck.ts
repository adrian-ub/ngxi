import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRundeckIcon],svg[simple-icons-rundeck-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.35 4.8L16.325 0H.115L3.14 4.8zM.115 24h16.21l3.025-4.8H3.14zM6.163 9.6h16.21l1.512 2.4l-1.512 2.4H6.163L7.675 12z"></svg:path>`,
})
export class SimpleIconsRundeckIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
