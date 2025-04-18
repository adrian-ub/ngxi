import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTrophyFilledIcon],svg[carbon-trophy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 7h-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.17 8.17 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.97 7.97 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2 2 0 0 0-2-2M8 14a2 2 0 0 1-2-2V9h2Zm18-2a2 2 0 0 1-2 2V9h2Z"></svg:path>`,
})
export class CarbonTrophyFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
