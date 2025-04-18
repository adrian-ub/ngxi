import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8CircleThinIcon],svg[icons8-circle-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.38 4 4 9.38 4 16s5.38 12 12 12s12-5.38 12-12S22.62 4 16 4m0 1c6.08 0 11 4.92 11 11s-4.92 11-11 11S5 22.08 5 16S9.92 5 16 5"></svg:path>`,
})
export class Icons8CircleThinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
