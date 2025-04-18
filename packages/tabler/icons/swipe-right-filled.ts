import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwipeRightFilledIcon],svg[tabler-swipe-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7a5 5 0 0 1 4.9 4h4.685l-1.292-1.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.414 0l3 3q.054.053.097.112l.071.11l.054.114l.035.105l.03.148L21 12l-.003.075l-.017.126l-.03.111l-.044.111l-.052.098l-.074.104l-.073.082l-3 3a1 1 0 0 1-1.414-1.414L17.584 13l-4.684.001A5.002 5.002 0 0 1 3 12a5 5 0 0 1 5-5"></svg:path>`,
})
export class TablerSwipeRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
