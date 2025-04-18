import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightArrangeSendBackwardIcon],svg[mdi-light-arrange-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7h4v1H7.71l6.71 6.72l-.7.7L7 8.71V11H6zm14 14H8v-9l1 1v7h10V10h-7l-1-1h9zM3 16V4h12v3h-1V5H4v10h2v1z"></svg:path>`,
})
export class MdiLightArrangeSendBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
