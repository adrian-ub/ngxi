import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFantasticoIcon],svg[whh-fantastico-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M376 403.5Q364 364 338.5 340T290 321t-31 37t4.5 71t38 63t48.5 19t30.5-36.5t-4.5-71m320-64Q684 300 658.5 276T610 257t-31 36.5t4.5 71t38 63.5t48.5 19t30.5-36.5t-4.5-71M566 748q-43 7-88 12t-90.5 6.5t-73.5 2t-71.5 0t-50.5-.5q18 30 83 48.5t158.5 18T615 811q66-17 121-47t89-63t52.5-65.5T896 576q-34 28-57 45t-69 46.5t-97.5 50T566 748"></svg:path>`,
})
export class WhhFantasticoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
