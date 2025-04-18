import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLaresmartIcon],svg[arcticons-laresmart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5s1.361 6 4.861 6l.076-.033A18.5 18.5 0 0 0 5.5 24c0 10.217 8.283 18.5 18.5 18.5h18.5s-1.361-6-4.861-6l-.077.033A18.5 18.5 0 0 0 42.5 24c0-10.217-8.283-18.5-18.5-18.5z"></svg:path><svg:circle cx="24" cy="24" r="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLaresmartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
