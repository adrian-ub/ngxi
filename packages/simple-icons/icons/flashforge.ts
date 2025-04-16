import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFlashforgeIcon],svg[simple-icons-flashforge-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.025 12l11.98-12l11.97 12l-11.97 12Zm14.544 2.672l-2.574 2.584v5.916L23.177 11.97L11.995.76v5.136L9.402 8.53v6.123l5.157-5.196Z"></svg:path>`,
})
export class SimpleIconsFlashforgeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
