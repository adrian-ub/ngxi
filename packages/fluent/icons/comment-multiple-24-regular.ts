import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentMultiple24RegularIcon],svg[fluent-comment-multiple-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.006 5.007A4 4 0 0 1 5.25 5h10.5A4.25 4.25 0 0 1 20 9.25v6.5q0 .123-.007.243A3.25 3.25 0 0 0 21.5 13.25v-4a5.75 5.75 0 0 0-5.75-5.75h-8a3.25 3.25 0 0 0-2.744 1.507M5.25 6A3.25 3.25 0 0 0 2 9.25v6.5a3.25 3.25 0 0 0 3 3.24v1.762a1.25 1.25 0 0 0 1.99 1.008L10.748 19h5.002A3.25 3.25 0 0 0 19 15.75v-6.5A3.25 3.25 0 0 0 15.75 6zM3.5 9.25c0-.966.784-1.75 1.75-1.75h10.5c.966 0 1.75.784 1.75 1.75v6.5a1.75 1.75 0 0 1-1.75 1.75h-5.494L6.5 20.258V17.5H5.25a1.75 1.75 0 0 1-1.75-1.75z"></svg:path>`,
})
export class FluentCommentMultiple24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
