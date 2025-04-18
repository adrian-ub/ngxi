import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDeskAdjustableIcon],svg[carbon-desk-adjustable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 27.172V22h-2v5.172l-2.586-2.586L11 26l5 5l5-5l-1.414-1.414z"></svg:path><svg:path fill="currentColor" d="M30 12H2v8h2v10h2V20h20v10h2V20h2zm-2 6H4v-4h24zM15 4.828V10h2V4.828l2.586 2.586L21 6l-5-5l-5 5l1.414 1.414z"></svg:path>`,
})
export class CarbonDeskAdjustableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
