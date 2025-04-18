import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNutIcon],svg[whh-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024L0 768V256L448 0l448 256v512zm.5-704q-79.5 0-136 56T256 512t56 136t136 56t136-56t56-136t-56-136t-135.5-56"></svg:path>`,
})
export class WhhNutIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
