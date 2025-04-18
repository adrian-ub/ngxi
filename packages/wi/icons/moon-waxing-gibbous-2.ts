import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wiMoonWaxingGibbous2Icon],svg[wi-moon-waxing-gibbous-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.85 14.44c0 4.77.71 8.52 2.14 11.26c2.04 0 3.93-.5 5.65-1.51s3.1-2.37 4.1-4.1s1.51-3.61 1.51-5.65s-.5-3.92-1.51-5.65s-2.37-3.09-4.1-4.09s-3.61-1.51-5.65-1.51c-1.42 3.42-2.14 7.17-2.14 11.25"></svg:path>`,
})
export class WiMoonWaxingGibbous2Icon {
  readonly viewBox = input("0 0 30 30")
  readonly width = input("1em")
  readonly height = input("1em")
}
