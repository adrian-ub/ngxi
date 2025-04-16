import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAwesomewmIcon],svg[simple-icons-awesomewm-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 24V8.25h16.5V7.5H0V0h24v24h-7.5v-8.25h-9v.75h8.25V24z"></svg:path>`,
})
export class SimpleIconsAwesomewmIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
