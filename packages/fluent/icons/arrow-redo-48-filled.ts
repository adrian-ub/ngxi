import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRedo48FilledIcon],svg[fluent-arrow-redo-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.002 5.5a1.5 1.5 0 0 0-3 0v11.485l-7.901-8.062c-5.572-6.3-14.95-6.161-19.93-.67c-5 5.514-3.376 13.309-.028 17.222l.008.01l2.259 2.544l2.537 2.537l4.247 4.16l8.242 8.33l.005.005l.497.496a1.5 1.5 0 1 0 2.12-2.122l-.49-.49l-.006-.006l-8.252-8.34l-4.253-4.165l-2.463-2.463l-2.18-2.456c-2.635-3.09-3.742-9.144-.02-13.247c3.738-4.123 11.05-4.37 15.482.667l.026.03L35.776 19H24.502a1.5 1.5 0 0 0 0 3h15a1.5 1.5 0 0 0 1.5-1.5z"></svg:path>`,
})
export class FluentArrowRedo48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
