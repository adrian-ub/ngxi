import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCircleHalfSolidIcon],svg[mynaui-circle-half-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 3.784a8.25 8.25 0 0 0 0 16.432zM2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"></svg:path>`,
})
export class MynauiCircleHalfSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
