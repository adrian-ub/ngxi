import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitAngleUpIcon],svg[uit-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.854 13.647l-4.5-4.5a.5.5 0 0 0-.707 0l-4.5 4.5a.5.5 0 0 0 .707.707L12 10.207l4.146 4.147a.5.5 0 0 0 .707 0a.5.5 0 0 0 0-.707"></svg:path>`,
})
export class UitAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
