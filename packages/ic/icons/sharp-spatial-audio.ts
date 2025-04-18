import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSpatialAudioIcon],svg[ic-sharp-spatial-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="9" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16.39 15.56C14.71 14.7 12.53 14 10 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 2 18.22V21h16v-2.78c0-1.12-.61-2.15-1.61-2.66M16 1h-2a9 9 0 0 0 9 9V8c-3.86 0-7-3.14-7-7"></svg:path><svg:path fill="currentColor" d="M20 1h-2c0 2.76 2.24 5 5 5V4c-1.65 0-3-1.35-3-3"></svg:path>`,
})
export class IcSharpSpatialAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
