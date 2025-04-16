import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSpinrillaIcon],svg[simple-icons-spinrilla-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.816a3.184 3.184 0 1 0 0 6.368a3.184 3.184 0 1 0 0-6.368M12 0v3.918A8.08 8.08 0 0 0 3.918 12H0A12 12 0 0 1 12 0m0 24v-3.918A8.08 8.08 0 0 0 20.082 12H24a12 12 0 0 1-12 12"></svg:path>`,
})
export class SimpleIconsSpinrillaIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
