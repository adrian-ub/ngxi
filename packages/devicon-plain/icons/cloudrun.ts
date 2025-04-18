import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainCloudrunIcon],svg[devicon-plain-cloudrun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 0l16.695 63.967L0 128l22.332-10.717l16.625-53.316L22.332 10.65Zm38.957 0l22.26 63.967L38.957 128L128 63.967Z"></svg:path>`,
})
export class DeviconPlainCloudrunIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
