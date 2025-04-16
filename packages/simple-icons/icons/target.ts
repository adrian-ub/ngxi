import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTargetIcon],svg[simple-icons-target-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0m0 19.826a7.827 7.827 0 1 0 0-15.652a7.827 7.827 0 0 0 0 15.652m0-3.985a3.84 3.84 0 1 1 0-7.68a3.84 3.84 0 0 1 0 7.68"></svg:path>`,
})
export class SimpleIconsTargetIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
