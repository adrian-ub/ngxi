import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSunCloudyFillIcon],svg[ri-sun-cloudy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.984 5.06a6.5 6.5 0 0 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21H9a8 8 0 1 1 .984-15.941m2.071.544a8.03 8.03 0 0 1 4.403 4.495a5.53 5.53 0 0 1 3.12.307a4.5 4.5 0 0 0-7.522-4.802"></svg:path>`,
})
export class RiSunCloudyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
