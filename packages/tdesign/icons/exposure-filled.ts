import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExposureFilledIcon],svg[tdesign-exposure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m1 8V6h-2v3H8v2h3v3h2v-3h3V9zm3 9v-2H8v2z"></svg:path>`,
})
export class TdesignExposureFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
