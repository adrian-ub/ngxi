import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsHeadingIcon],svg[dashicons-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 4v5.2h-5V4H5v13h2.5v-5.2h5V17H15V4z"></svg:path>`,
})
export class DashiconsHeadingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
