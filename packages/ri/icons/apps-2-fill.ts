import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riApps2FillIcon],svg[ri-apps-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9"></svg:path>`,
})
export class RiApps2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
