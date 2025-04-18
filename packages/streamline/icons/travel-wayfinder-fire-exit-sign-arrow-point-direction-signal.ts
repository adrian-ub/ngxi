import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderFireExitSignArrowPointDirectionSignalIcon],svg[streamline-travel-wayfinder-fire-exit-sign-arrow-point-direction-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4 2.53a.34.34 0 0 0-.34 0a.22.22 0 0 0 0 .29c1 1.74 1.26 4.21-.17 5.56A4.69 4.69 0 0 1 2.2 6.73a3.3 3.3 0 0 0-1.7 3a4 4 0 0 0 4.25 3.77A3.88 3.88 0 0 0 9 9.69C9.11 7.16 7.33 4 4 2.53Z"></svg:path><svg:path d="M6.87 9.69a1.69 1.69 0 0 1-1.7 1.69M11.5.5l2 2l-2 2m2-2H9"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderFireExitSignArrowPointDirectionSignalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
