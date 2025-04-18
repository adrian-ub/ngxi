import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGradientIcon],svg[carbon-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-4 22v-4h-4v4h-4v-4h-4v-4h4v-4h-4v-4h4V6h4v4h4V6h4v20Z"></svg:path><svg:path fill="currentColor" d="M14 10h4v4h-4zm0 8h4v4h-4zm4-4h4v4h-4z"></svg:path>`,
})
export class CarbonGradientIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
