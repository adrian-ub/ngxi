import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam4FilledIcon],svg[tdesign-dam-4-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 13h5v9h-5z"></svg:path><svg:path fill="currentColor" d="M13 2h9v20h-5.5V11H13zM2 2h9v9H7.5v11H2z"></svg:path>`,
})
export class TdesignDam4FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
