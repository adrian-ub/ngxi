import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconCircleSlash24Icon],svg[octicon-circle-slash-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1M5.834 19.227A9.46 9.46 0 0 0 12 21.5a9.5 9.5 0 0 0 9.5-9.5a9.46 9.46 0 0 0-2.273-6.166ZM2.5 12a9.46 9.46 0 0 0 2.273 6.166L18.166 4.773A9.46 9.46 0 0 0 12 2.5A9.5 9.5 0 0 0 2.5 12"></svg:path>`,
})
export class OcticonCircleSlash24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
