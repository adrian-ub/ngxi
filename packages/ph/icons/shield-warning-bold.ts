import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShieldWarningBoldIcon],svg[ph-shield-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 132V96a12 12 0 0 1 24 0v36a12 12 0 0 1-24 0m12 56a16 16 0 1 0-16-16a16 16 0 0 0 16 16M228 56v56c0 54.29-26.32 87.22-48.4 105.29c-23.71 19.39-47.44 26-48.44 26.29a12.1 12.1 0 0 1-6.32 0c-1-.28-24.73-6.9-48.44-26.29C54.32 199.22 28 166.29 28 112V56a20 20 0 0 1 20-20h160a20 20 0 0 1 20 20m-24 4H52v52c0 35.71 13.09 64.69 38.91 86.15A126.1 126.1 0 0 0 128 219.38a126.3 126.3 0 0 0 37.09-21.23C190.91 176.69 204 147.71 204 112Z"></svg:path>`,
})
export class PhShieldWarningBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
