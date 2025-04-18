import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight02FilledIcon],svg[carbon-direction-bear-right-02-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 7.414L7.414 6L14 12.586L12.586 14ZM26 16h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 16 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L22.586 8H16V6h10Z"></svg:path><svg:path fill="none" d="M26 6v10h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 16 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L22.586 8H16V6Zm-12 6.586L7.414 6L6 7.414L12.586 14Z"></svg:path>`,
})
export class CarbonDirectionBearRight02FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
