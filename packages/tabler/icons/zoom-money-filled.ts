import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerZoomMoneyFilledIcon],svg[tabler-zoom-money-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3.072a8 8 0 0 1 2.32 11.834l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.388-5.387A8 8 0 0 1 2 10l.005-.285A8 8 0 0 1 14 3.072M12 6H9.5a2.5 2.5 0 0 0 0 5h1a.5.5 0 1 1 0 1H8a1 1 0 0 0 0 2h2.5a2.5 2.5 0 1 0 0-5h-1a.5.5 0 0 1 0-1H12a1 1 0 0 0 0-2"></svg:path>`,
})
export class TablerZoomMoneyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
