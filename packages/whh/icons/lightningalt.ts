import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLightningaltIcon],svg[whh-lightningalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024L620 620L384 768L0 256L320 0l232 440l216-120z"></svg:path>`,
})
export class WhhLightningaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
