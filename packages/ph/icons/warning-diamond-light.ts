import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWarningDiamondLightIcon],svg[ph-warning-diamond-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 136V80a6 6 0 0 1 12 0v56a6 6 0 0 1-12 0m6 26a10 10 0 1 0 10 10a10 10 0 0 0-10-10m110-34a13.82 13.82 0 0 1-4.09 9.86l-96 96.06a14 14 0 0 1-19.72 0l-96-96.06a13.93 13.93 0 0 1 0-19.72l96.05-96.06a14 14 0 0 1 19.72 0l96 96.06A13.82 13.82 0 0 1 238 128m-12 0a1.94 1.94 0 0 0-.57-1.38l-96.05-96.06a2 2 0 0 0-2.76 0l-96.05 96.06a2 2 0 0 0 0 2.76l96.05 96.06a2 2 0 0 0 2.76 0l96.05-96.06A1.94 1.94 0 0 0 226 128"></svg:path>`,
})
export class PhWarningDiamondLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
