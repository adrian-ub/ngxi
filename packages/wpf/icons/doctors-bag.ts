import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfDoctorsBagIcon],svg[wpf-doctors-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1C8.355 1 7 2.355 7 4v2h2V4c0-.563.437-1 1-1h6c.563 0 1 .437 1 1v2h2V4c0-1.645-1.355-3-3-3zM3 7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h20c1.656 0 3-1.344 3-3V10a3 3 0 0 0-3-3zm10 2.906A6.09 6.09 0 0 1 19.094 16A6.09 6.09 0 0 1 13 22.094A6.09 6.09 0 0 1 6.906 16A6.09 6.09 0 0 1 13 9.906M12 13v2h-2v2h2v2h2v-2h2v-2h-2v-2z"></svg:path>`,
})
export class WpfDoctorsBagIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
