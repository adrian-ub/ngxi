import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCandleFilledIcon],svg[tabler-candle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11a2 2 0 0 1 2-2zm-2.746-7.666a1 1 0 0 1 1.491 0l1.452 1.623a3 3 0 0 1-4.196 4.28c-1.195-1.07-1.339-2.889-.297-4.166z"></svg:path>`,
})
export class TablerCandleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
