import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusCloseIcon],svg[nimbus-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.41 3.27l-.82-.94L8 7.17L2.41 2.33l-.82.94L7.05 8l-5.46 4.73l.82.94L8 8.83l5.59 4.84l.82-.94L8.95 8z"></svg:path>`,
})
export class NimbusCloseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
