import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsInformationIcon],svg[lineicons-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.4 56h-6.1V21.6c0-2.8-2.3-5-5-5h-5.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c.3 0 .5.2.5.5V56h-6.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h16.8c1.2 0 2.3-1 2.3-2.3S41.6 56 40.4 56"></svg:path><svg:circle cx="31.5" cy="8.7" r="3" fill="currentColor"></svg:circle>`,
})
export class LineiconsInformationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
