import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEaseeIcon],svg[arcticons-easee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 42.379C15.598 31.444 8.148 23.236 11.477 19.752c3.616-3.785 22.438 11.132 24.729 8.243c2.634-3.322-13.08-14.551-11.44-16.766c1.3-1.754 12.87 7.345 13.963 6.042c1.093-1.304-6.224-6.94-6.224-6.94"></svg:path>`,
})
export class ArcticonsEaseeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
