import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons17trackIcon],svg[arcticons-17track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m40.602 24.617l-6.735 12.516h6.735ZM8.219 14.443l6.566-3.576m0 0v26.266m11.541 0l14.133-26.266H23.058"></svg:path>`,
})
export class Arcticons17trackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
