import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightIcon],svg[ph-arrow-fat-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m237.66 122.34l-96-96A8 8 0 0 0 128 32v40H48a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h80v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32M144 204.69V176a8 8 0 0 0-8-8H48V88h88a8 8 0 0 0 8-8V51.31L220.69 128Z"></svg:path>`,
})
export class PhArrowFatRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
