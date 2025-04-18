import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOrientationLandscapeIcon],svg[streamline-orientation-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 12h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1"></svg:path><svg:path d="M9.502 6.212a1.245 1.245 0 1 0 0-2.49a1.245 1.245 0 0 0 0 2.49M9.083 12a7.1 7.1 0 0 0-7.136-5.786A7.6 7.6 0 0 0 .5 6.349"></svg:path><svg:path d="M13.5 8.94a7.72 7.72 0 0 0-5.506.225"></svg:path></svg:g>`,
})
export class StreamlineOrientationLandscapeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
