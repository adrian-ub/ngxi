import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNorcoIcon],svg[simple-icons-norco-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.055 2.707a.97.97 0 0 0-.688.387L0 16.78h4.049l7.27-9.597l1.927 5.74l1.42-1.875l-2.578-7.676a.98.98 0 0 0-1.033-.666zM19.95 7.22l-7.27 9.597l-1.927-5.74l-1.42 1.875l2.578 7.676a.987.987 0 0 0 1.72.28L24 7.218z"></svg:path>`,
})
export class SimpleIconsNorcoIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
