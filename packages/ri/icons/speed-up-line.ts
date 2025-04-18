import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSpeedUpLineIcon],svg[ri-speed-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13c0 2.21-.895 4.21-2.343 5.657l1.414 1.414A9.97 9.97 0 0 0 22 13c0-5.523-4.477-10-10-10S2 7.477 2 13a9.97 9.97 0 0 0 2.929 7.071l1.414-1.414A8 8 0 1 1 20 13m-4.707-4.707l-4.5 4.5l1.414 1.414l4.5-4.5z"></svg:path>`,
})
export class RiSpeedUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
