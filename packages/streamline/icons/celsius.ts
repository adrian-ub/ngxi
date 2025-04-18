import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCelsiusIcon],svg[streamline-celsius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 3.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m10.5 0c-.412-1.165-1.694-2-3-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3c1.306 0 2.588-.835 3-2"></svg:path>`,
})
export class StreamlineCelsiusIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
