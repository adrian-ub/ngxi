import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCameraDome24RegularIcon],svg[fluent-camera-dome-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-8a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m-4 5.5a4 4 0 1 1 8 0a4 4 0 0 1-8 0M2 3.75C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75v1.5c0 .698-.409 1.3-1 1.582V13a9 9 0 1 1-18 0V6.832A1.75 1.75 0 0 1 2 5.25zM4.5 7v6a7.5 7.5 0 1 0 15 0V7zm-.75-3.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25z"></svg:path>`,
})
export class FluentCameraDome24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
