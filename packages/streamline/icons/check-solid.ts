import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCheckSolidIcon],svg[streamline-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.637 1.198a1 1 0 0 1 .134 1.408l-8.04 9.73l-.003.002a1.92 1.92 0 0 1-1.5.693a1.92 1.92 0 0 1-1.499-.748l-.001-.002L.21 9.045a1 1 0 1 1 1.578-1.228l2.464 3.167l7.976-9.652a1 1 0 0 1 1.408-.134Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineCheckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
