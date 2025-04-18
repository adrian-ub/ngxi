import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileySparksIcon],svg[streamline-smiley-sparks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13m-2.25-10V6M3.5 4.75H6M9.25 3.5V6M8 4.75h2.5"></svg:path><svg:path d="M3.535 8a3.5 3.5 0 0 0 6.93 0z"></svg:path></svg:g>`,
})
export class StreamlineSmileySparksIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
