import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMicrostrategyIcon],svg[simple-icons-microstrategy-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.095 2.572h5.827v18.856H9.096zM0 2.572h5.825v18.856H.001zm18.174 0v18.854H24V8.33z"></svg:path>`,
})
export class SimpleIconsMicrostrategyIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
