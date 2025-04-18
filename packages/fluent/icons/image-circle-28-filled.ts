import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageCircle28FilledIcon],svg[fluent-image-circle-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2C7.373 2 2 7.373 2 14a11.96 11.96 0 0 0 3.016 7.956l7.588-7.4a2 2 0 0 1 2.792 0l7.588 7.4A11.96 11.96 0 0 0 26 14c0-6.627-5.373-12-12-12m7.921 21.014l-7.572-7.383a.5.5 0 0 0-.698 0l-7.572 7.383A11.95 11.95 0 0 0 14 26c3.035 0 5.808-1.127 7.921-2.986M20.5 9.75a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0"></svg:path>`,
})
export class FluentImageCircle28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
