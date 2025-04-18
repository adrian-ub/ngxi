import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSigmaLightIcon],svg[ph-sigma-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M186 72V54H76.48l56.21 70.25a6 6 0 0 1 0 7.5L76.48 202H186v-18a6 6 0 0 1 12 0v24a6 6 0 0 1-6 6H64a6 6 0 0 1-4.69-9.75l61-76.25l-61-76.25A6 6 0 0 1 64 42h128a6 6 0 0 1 6 6v24a6 6 0 0 1-12 0"></svg:path>`,
})
export class PhSigmaLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
