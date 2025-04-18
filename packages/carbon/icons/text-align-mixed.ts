import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignMixedIcon],svg[carbon-text-align-mixed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4H9v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6V6a2 2 0 0 0-2-2m0 8h-4v-2h4zm8 14v-8h-2v1h-2v2h2v5h-2v2h6v-2zM2 2h2v14H2zm26 14h2v14h-2z"></svg:path>`,
})
export class CarbonTextAlignMixedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
