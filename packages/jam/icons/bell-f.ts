import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBellFIcon],svg[jam-bell-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 17H0a8.98 8.98 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.98 8.98 0 0 1 18 17M6.17 18h5.66a3.001 3.001 0 0 1-5.66 0"></svg:path>`,
})
export class JamBellFIcon {
  readonly viewBox = input("-3 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
