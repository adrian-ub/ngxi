import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBookmeterIcon],svg[simple-icons-bookmeter-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.678 14.262h6.089V24H.678zm8.215 9.717h6.089V7.11H8.893zM17.234 0v24h6.089V0z"></svg:path>`,
})
export class SimpleIconsBookmeterIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
