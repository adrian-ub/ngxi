import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPasswordIcon],svg[ph-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 56v144a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0m92 54.5l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.5a8 8 0 0 0-5 15.22l20 6.49l-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17l12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17l20-6.49A8 8 0 0 0 140 110.5m106 5.14a8 8 0 0 0-10-5.14l-20 6.5V96a8 8 0 0 0-16 0v21l-20-6.49a8 8 0 0 0-4.95 15.22l20 6.49l-12.34 17a8 8 0 1 0 12.94 9.4l12.34-17l12.34 17a8 8 0 1 0 12.94-9.4l-12.34-17l20-6.49a8 8 0 0 0 5.07-10.09"></svg:path>`,
})
export class PhPasswordIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
