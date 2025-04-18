import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorWrench20Icon],svg[fluent-color-wrench-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorWrench200)" d="M13.5 2a4.5 4.5 0 0 0-4.418 5.36l-6.425 6.658a2.357 2.357 0 0 0 3.374 3.293l6.364-6.448Q12.927 11 13.5 11a4.5 4.5 0 0 0 4.386-5.51a.5.5 0 0 0-.841-.242L14.5 7.793L12.207 5.5l2.545-2.545a.5.5 0 0 0-.241-.84A4.5 4.5 0 0 0 13.5 2"></svg:path><svg:defs><svg:lineargradient id="fluentColorWrench200" x1="8.5" x2="11.356" y1="3" y2="18.576" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2BDABE"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorWrench20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
