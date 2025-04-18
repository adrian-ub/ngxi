import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneLightningIcon],svg[icon-park-twotone-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTLightning0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M19 4h18L26 18h15L17 44l5-19H8z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTLightning0)"></svg:path>`,
})
export class IconParkTwotoneLightningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
