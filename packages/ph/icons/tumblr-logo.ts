import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoIcon],svg[ph-tumblr-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 120a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8h-40V24a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8a40 40 0 0 1-40 40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h24v56a64.07 64.07 0 0 0 64 64h40a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8h-32a8 8 0 0 1-8-8v-48Zm-32 72h24v32h-32a48.05 48.05 0 0 1-48-48v-64a8 8 0 0 0-8-8H72V79.43A56.13 56.13 0 0 0 119.43 32H136v40a8 8 0 0 0 8 8h40v24h-40a8 8 0 0 0-8 8v56a24 24 0 0 0 24 24"></svg:path>`,
})
export class PhTumblrLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
