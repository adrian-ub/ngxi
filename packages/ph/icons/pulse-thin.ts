import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPulseThinIcon],svg[ph-pulse-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 128a4 4 0 0 1-4 4h-29.53l-38.89 77.79A4 4 0 0 1 160 212h-.2a4 4 0 0 1-3.54-2.58l-60.59-159l-36 79.28A4 4 0 0 1 56 132H24a4 4 0 0 1 0-8h29.42l38.94-85.65a4 4 0 0 1 7.38.23l60.76 159.48l35.92-71.85A4 4 0 0 1 200 124h32a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhPulseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
