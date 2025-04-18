import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDetectionIcon],svg[icon-park-outline-detection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="m6.45 34.85l3.99-3.348l.513-5.87l7.98-6.696l8.778-7.365l3.192-2.679a7.292 7.292 0 1 1 9.374 11.172l-3.192 2.678l-8.778 7.365l-7.98 6.696l-5.867-.51l-3.987 3.345a3.13 3.13 0 0 1-4.408-.386a3.125 3.125 0 0 1 .385-4.403Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="m23.437 9.718l14.77 17.603M18.576 29l5.726-5"></svg:path></svg:g>`,
})
export class IconParkOutlineDetectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
