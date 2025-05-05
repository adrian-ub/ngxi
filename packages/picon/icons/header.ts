import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHeaderIcon],svg[picon-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6V5H0v1m8 2V7H0v1m7-5V1H1v2M0 4V0h8v4"></svg:path>`,
})
export class PiconHeaderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
