import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinkNowIcon],svg[arcticons-link-now-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.924 9.174H32.66c15.436 0 15.015 28.994-5.327 29.653v-3.67H16.225c-16.39 0-14.762-25.983-.301-25.983"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.66 24.895c5.012 6.722 15.075 6.768 20.683 0"></svg:path>`,
})
export class ArcticonsLinkNowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
