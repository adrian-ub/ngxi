import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTagverticalIcon],svg[whh-tagvertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M641 1024H129q-53 0-90.5-37.5T1 896V393q-2-29 18-50L340 19q19-19 45-19q27 0 46 19l80 81l160 162l80 81q9 10 14 20.5t4 16.5v516q0 53-37.5 90.5T641 1024M385 192q-53 0-90.5 37.5T257 320t37.5 90.5T385 448t90.5-37.5T513 320t-37.5-90.5T385 192"></svg:path>`,
})
export class WhhTagverticalIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
