import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoXingIcon],svg[carbon-logo-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.42 8.29a1.25 1.25 0 0 0-1.13-.76h-4a.65.65 0 0 0-.55.25a.63.63 0 0 0 0 .62l2.73 4.73l-4.3 7.59a.6.6 0 0 0 0 .62a.58.58 0 0 0 .52.28h4a1.22 1.22 0 0 0 1.1-.78l4.36-7.71zm16.41-5.41a.65.65 0 0 0 0-.62a.61.61 0 0 0-.53-.26h-4.08a1.19 1.19 0 0 0-1.08.77s-8.7 15.43-9 15.93l5.74 10.53A1.26 1.26 0 0 0 20 30h4a.59.59 0 0 0 .54-.26a.62.62 0 0 0 0-.62l-5.69-10.4Z"></svg:path>`,
})
export class CarbonLogoXingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
