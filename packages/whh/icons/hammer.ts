import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHammerIcon],svg[whh-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.5 928.5Q961 960 916.5 960T840 928L607 695q-37-37-30-90L298 326L198 429q-18 19-44.5 19T108 429l-89-92Q0 317 0 290.5T19 244L256 0h269q19 19 19 46t-19 46L388 233l281 280q53-7 90 30l233 233q32 32 32 76.5t-31.5 76"></svg:path>`,
})
export class WhhHammerIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
