import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockShareIcon],svg[tabler-clock-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.943 13.016A9 9 0 1 0 12.028 21M16 22l5-5m0 4.5V17h-4.5"></svg:path><svg:path d="M12 7v5l2 2"></svg:path></svg:g>`,
})
export class TablerClockShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
