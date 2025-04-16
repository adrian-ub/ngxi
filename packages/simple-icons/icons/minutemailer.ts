import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMinutemailerIcon],svg[simple-icons-minutemailer-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.187 19.181L24 4.755L0 12.386l9.196 1.963l.043 4.896l2.759-2.617l-2.147-2.076z"></svg:path>`,
})
export class SimpleIconsMinutemailerIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
