import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight01FilledIcon],svg[carbon-direction-bear-right-01-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6 14h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 12 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L18.586 8H12V6h10Z"></svg:path><svg:path fill="none" d="M22 16h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 12 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L18.586 8H12V6h10Z"></svg:path>`,
})
export class CarbonDirectionBearRight01FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
