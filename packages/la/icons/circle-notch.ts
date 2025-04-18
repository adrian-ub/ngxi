import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCircleNotchIcon],svg[la-circle-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.18v2.023c4.559.93 8 4.969 8 9.797c0 5.516-4.484 10-10 10S6 21.516 6 16c0-4.828 3.441-8.867 8-9.797V4.18C8.336 5.137 4 10.066 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.934-4.336-10.863-10-11.82"></svg:path>`,
})
export class LaCircleNotchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
