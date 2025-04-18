import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonThresholdIcon],svg[carbon-threshold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26 4H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2zM6 6h20v10h-2v2h2v2h-2v2h2v2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2h-2v2h-2v-2H8v2H6z" fill="currentColor"></svg:path><svg:path d="M8 20h2v2H8z" fill="currentColor"></svg:path><svg:path d="M12 20h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M16 20h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 20h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M8 16h2v2H8z" fill="currentColor"></svg:path><svg:path d="M16 16h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 16h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 12h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M20 8h2v2h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonThresholdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
