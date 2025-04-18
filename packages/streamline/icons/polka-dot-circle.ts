import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePolkaDotCircleIcon],svg[streamline-polka-dot-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M3.8 5.8C3.8 4 5.2 2.5 7 2.5s3.2 1.5 3.2 3.2S8.8 9 7 9c-.8 0-1.6.5-1.9 1.4M5 11l1-5m1.8 5.25a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"></svg:path></svg:g>`,
})
export class StreamlinePolkaDotCircleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
