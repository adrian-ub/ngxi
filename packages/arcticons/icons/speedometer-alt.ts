import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSpeedometerAltIcon],svg[arcticons-speedometer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.61 15.539a18.9 18.9 0 0 1 3.89 11.5h0c0 4.681-1.729 9.193-4.846 12.648m-27.289.021A18.9 18.9 0 0 1 5.5 27.038C5.5 16.685 13.783 8.292 24 8.292c4.142 0 8.165 1.408 11.423 4M24.164 26.97l11.87-12.134"></svg:path>`,
})
export class ArcticonsSpeedometerAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
