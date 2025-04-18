import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBody24pxIcon],svg[healthicons-body-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M4.03 7.76a1 1 0 0 1 1.21-.73c2.661.658 4.694.971 6.717.97c2.024-.001 4.087-.318 6.81-.972a1 1 0 0 1 .467 1.944c-1.553.374-2.932.649-4.234.82v4.172l.497 6.965a1 1 0 1 1-1.995.142L13.14 16h-2.28l-.363 5.071a1 1 0 1 1-1.994-.142L9 13.964v-4.16c-1.31-.17-2.689-.45-4.24-.833a1 1 0 0 1-.73-1.211"></svg:path></svg:g>`,
})
export class HealthiconsBody24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
