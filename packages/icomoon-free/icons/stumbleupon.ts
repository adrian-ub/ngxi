import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeStumbleuponIcon],svg[icomoon-free-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5c-.55 0-1 .45-1 1v4c0 1.653-1.347 3-3 3s-3-1.347-3-3V8h2v2c0 .55.45 1 1 1s1-.45 1-1V6c0-1.653 1.347-3 3-3s3 1.347 3 2.781v.969l-1.281.375L9 6.75v-.969C9 5.45 8.55 5 8 5"></svg:path><svg:path fill="currentColor" d="M15 10c0 1.653-1.347 3-3 3s-3-1.347-3-3.219V7.843l.719.375L11 7.843v1.938c0 .769.45 1.219 1 1.219s1-.45 1-1V8h2z"></svg:path>`,
})
export class IcomoonFreeStumbleuponIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
