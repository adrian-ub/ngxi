import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWrench20FilledIcon],svg[fluent-wrench-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 2a4.5 4.5 0 0 0-4.417 5.36l-6.426 6.658a2.357 2.357 0 0 0 3.374 3.293l6.365-6.448Q12.929 11 13.5 11a4.5 4.5 0 0 0 4.386-5.51a.5.5 0 0 0-.84-.242L14.5 7.793L12.208 5.5l2.545-2.545a.5.5 0 0 0-.242-.84A4.5 4.5 0 0 0 13.501 2"></svg:path>`,
})
export class FluentWrench20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
