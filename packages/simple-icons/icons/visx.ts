import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsVisxIcon],svg[simple-icons-visx-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.002 0L12 11.52L23.998 0h-5.871L12 6.09L5.873 0Zm23.996 0l-11.52 11.998l11.52 11.998v-5.871l-6.09-6.127l6.09-6.127ZM.002.004v5.871l6.09 6.127l-6.09 6.127V24l11.504-11.998ZM.002 24h5.871L12 17.91L18.127 24h5.871L12 12.47Z"></svg:path>`,
})
export class SimpleIconsVisxIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
