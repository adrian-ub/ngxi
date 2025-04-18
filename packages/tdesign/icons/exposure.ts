import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExposureIcon],svg[tdesign-exposure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m12-6v3h3v2h-3v3h-2v-3H8V9h3V6zM8 16h8v2H8z"></svg:path>`,
})
export class TdesignExposureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
