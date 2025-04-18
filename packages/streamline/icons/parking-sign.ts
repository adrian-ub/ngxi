import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineParkingSignIcon],svg[streamline-parking-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5.5h-7a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3"></svg:path><svg:path d="M5.209 10.514V7.586m0 0v-4.1h3.185a1.5 1.5 0 0 1 1.5 1.5v1.1a1.5 1.5 0 0 1-1.5 1.5z"></svg:path></svg:g>`,
})
export class StreamlineParkingSignIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
