import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayEqualizerIcon],svg[subway-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M106.7 25.8H21.3v64h85.3v-64zM21.3 495.2h85.3V217.8H21.3zM490.7 25.8h-85.3v277.3h85.3zm-85.4 469.4h85.3v-64h-85.3zm-192 0h85.3V324.5h-85.3zm85.4-469.4h-85.3v170.7h85.3zM0 175.2h128v-42.7H0zm192 106.6h128v-42.7H192zm192 64v42.7h128v-42.7z"></svg:path>`,
})
export class SubwayEqualizerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
