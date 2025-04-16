import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHurriyetemlakIcon],svg[simple-icons-hurriyetemlak-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 16.085L11.994 4.091L0 16.097l3.817 3.812l8.182-8.189l8.189 8.182z"></svg:path>`,
})
export class SimpleIconsHurriyetemlakIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
