import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomRightThinCircleOutlineIcon],svg[mdi-arrow-bottom-right-thin-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.03c-4.41 0-8.03-3.62-8.03-8.03S7.59 3.97 12 3.97s8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03M12 22c5.54 0 10-4.46 10-10S17.54 2 12 2S2 6.46 2 12s4.46 10 10 10m1.88-9.53L16 10.36V16h-5.64l2.11-2.12L7.5 8.9l1.4-1.4"></svg:path>`,
})
export class MdiArrowBottomRightThinCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
