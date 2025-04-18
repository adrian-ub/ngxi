import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLightningIcon],svg[whh-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m576 576l448 448l-832-384l256-192L0 0l832 384z"></svg:path>`,
})
export class WhhLightningIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
