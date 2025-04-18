import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSendBackwardIcon],svg[carbon-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7H2V4a2 2 0 0 1 2-2h3v2H4zm3 15H4a2 2 0 0 1-2-2v-3h2v3h3zM2 10h2v4H2zm20-3h-2V4h-3V2h3a2 2 0 0 1 2 2zM10 2h4v2h-4zm18 28H12a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M12 12v16h16V12z"></svg:path>`,
})
export class CarbonSendBackwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
