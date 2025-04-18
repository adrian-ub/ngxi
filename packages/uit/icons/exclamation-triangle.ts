import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitExclamationTriangleIcon],svg[uit-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.875a.625.625 0 1 0 0 1.25a.625.625 0 0 0 0-1.25M12 14a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5m10.713 3.547L14.564 3.479a2.964 2.964 0 0 0-5.128 0l-8.15 14.07A2.965 2.965 0 0 0 3.852 22h16.294a2.966 2.966 0 0 0 2.567-4.453M20.146 21H3.852a1.965 1.965 0 0 1-1.7-2.95L10.3 3.98a1.94 1.94 0 0 1 1.699-.979a1.94 1.94 0 0 1 1.7.98l8.148 14.068A1.966 1.966 0 0 1 20.146 21"></svg:path>`,
})
export class UitExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
