import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phInfinityLightIcon],svg[ph-infinity-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M246 128a54 54 0 0 1-92.18 38.18a3 3 0 0 1-.25-.26l-60-67.74a42 42 0 1 0 0 59.64l8.57-9.67a6 6 0 1 1 9 8l-8.69 9.81a3 3 0 0 1-.25.26a54 54 0 1 1 0-76.36a3 3 0 0 1 .25.26l60 67.74a42 42 0 1 0 0-59.64l-8.57 9.67a6 6 0 1 1-9-8l8.69-9.81a3 3 0 0 1 .25-.26A54 54 0 0 1 246 128"></svg:path>`,
})
export class PhInfinityLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
