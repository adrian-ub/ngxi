import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsShieldExclamationLineIcon],svg[majesticons-shield-exclamation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 1.932l9 3.375V10c0 4.118-1.62 7.113-3.535 9.074a11.407 11.407 0 0 1-2.915 2.175c-.913.468-1.826.751-2.55.751c-.724 0-1.637-.283-2.55-.75a11.41 11.41 0 0 1-2.915-2.176C4.619 17.113 3 14.118 3 10V5.307l9-3.375zM5 6.693V10c0 3.549 1.38 6.054 2.965 7.676a9.411 9.411 0 0 0 2.397 1.793c.775.397 1.362.531 1.638.531c.276 0 .863-.134 1.638-.53a9.412 9.412 0 0 0 2.397-1.794C17.619 16.054 19 13.55 19 10V6.693l-7-2.625l-7 2.625z"></svg:path><svg:path d="M12 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1zm-1 8a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsShieldExclamationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
