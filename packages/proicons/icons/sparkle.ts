import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsSparkleIcon],svg[proicons-sparkle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.256 3.567c.266-.675 1.222-.675 1.488 0l2.047 5.19a.8.8 0 0 0 .451.452l5.191 2.047c.675.266.675 1.222 0 1.488l-5.19 2.047a.8.8 0 0 0-.452.451l-2.047 5.191c-.266.675-1.222.675-1.488 0l-2.047-5.19a.8.8 0 0 0-.451-.452l-5.191-2.047c-.675-.266-.675-1.222 0-1.488l5.19-2.047a.8.8 0 0 0 .452-.451z"></svg:path><svg:circle cx="5.25" cy="5.25" r="1.25" fill="currentColor"></svg:circle><svg:circle cx="19" cy="19" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsSparkleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
