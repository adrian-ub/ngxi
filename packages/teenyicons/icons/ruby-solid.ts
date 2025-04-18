import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsRubySolidIcon],svg[teenyicons-ruby-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.293 4L8.058.236L9.73 4zm10-4l-3.632 3.632L9.047 0zM.236 8.058L4 9.73V4.293zm3.396 2.603L0 9.047v5.246zM5 9.293L9.293 5H5zm10 4.438l-3.907-9.117L15 .707zm-.952.317l-3.717-8.672l-4.955 4.955zm-9.434-2.955L13.731 15H.707z"></svg:path>`,
})
export class TeenyiconsRubySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
