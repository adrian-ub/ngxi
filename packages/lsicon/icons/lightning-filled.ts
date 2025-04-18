import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLightningFilledIcon],svg[lsicon-lightning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.663 1.027A.5.5 0 0 1 9 1.5V7h3a.5.5 0 0 1 .393.809l-5.5 7A.5.5 0 0 1 6 14.5V9H3a.5.5 0 0 1-.393-.809l5.5-7a.5.5 0 0 1 .556-.164" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLightningFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
