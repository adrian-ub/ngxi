import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBeerPitchIcon],svg[streamline-beer-pitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 11h2a1 1 0 0 0 1-1V7.5a1 1 0 0 0-1-1h-1.841M2 6.879v4.62a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6.874"></svg:path><svg:path d="M2 6.872a2.25 2.25 0 1 1 1.526-4.235a2.5 2.5 0 0 1 4.948 0A2.25 2.25 0 1 1 9.25 7H5v2a1.5 1.5 0 1 1-3 0z"></svg:path></svg:g>`,
})
export class StreamlineBeerPitchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
