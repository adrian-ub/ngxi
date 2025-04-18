import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceTentative16RegularIcon],svg[fluent-presence-tentative-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.993 8.097A8 8 0 0 1 8.091 16zm-.456-2.768a8 8 0 0 0-1.135-2.118L3.206 14.409a8 8 0 0 0 2.118 1.134zM1.591 12.798a8 8 0 0 1-1.138-2.119L10.673.46c.767.273 1.48.66 2.118 1.139zM7.908 0A8 8 0 0 0-.006 7.914z"></svg:path>`,
})
export class FluentPresenceTentative16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
