import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeUpAltOutlineIcon],svg[material-symbols-light-swipe-up-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.003 19q-1.866 0-3.185-1.316T7.5 14.5q0-1.748 1.138-3.005t2.862-1.472V4.921L9.4 7.016l-.708-.708L12 3l3.308 3.308l-.708.713l-2.1-2.1v5.102q1.725.216 2.863 1.472T16.5 14.5q0 1.868-1.315 3.184Q13.869 19 12.003 19m0-1q1.459 0 2.478-1.022t1.019-2.48t-1.022-2.479T11.999 11T9.52 12.022t-1.019 2.48t1.022 2.479T12.002 18M12 14.5"></svg:path>`,
})
export class MaterialSymbolsLightSwipeUpAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
