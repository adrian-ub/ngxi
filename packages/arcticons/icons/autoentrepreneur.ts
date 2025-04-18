import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAutoentrepreneurIcon],svg[arcticons-autoentrepreneur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M23.526 14.073a8.573 8.573 0 1 1-17.146 0a8.573 8.573 0 0 1 17.146 0Z"></svg:path><svg:path fill="none" stroke="currentColor" d="M42.477 24a18.5 18.5 0 0 1-36.952 1.32c-.034-.463.347-.869.855-.869h16.244c1.004 0 1.783-.81 1.852-1.771A18.5 18.5 0 0 1 35.849 6.908a18.5 18.5 0 0 1 5.76-1.361c.462-.033.869.348.869.855z"></svg:path>`,
})
export class ArcticonsAutoentrepreneurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
