import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEyeHide20FilledIcon],svg[fluent-eye-hide-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .979.204a7.09 7.09 0 0 1 3.108-4.528L7.95 8.656a3.5 3.5 0 1 0 4.884 4.884l4.313 4.314a.5.5 0 0 0 .708-.708l-15-15z" fill="currentColor"></svg:path><svg:path d="M10.124 8.003l3.363 3.363a3.5 3.5 0 0 0-3.363-3.363z" fill="currentColor"></svg:path><svg:path d="M7.531 5.41l.803.803A6.632 6.632 0 0 1 10 6c3.206 0 6.057 2.327 6.74 5.602a.5.5 0 1 0 .98-.204C16.943 7.673 13.693 5 10 5c-.855 0-1.687.143-2.469.41z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentEyeHide20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
