import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowURightDownThinIcon],svg[ph-arrow-u-right-down-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m218.83 178.83l-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L164 214.34V88a52 52 0 0 0-104 0v88a4 4 0 0 1-8 0V88a60 60 0 0 1 120 0v126.34l41.17-41.17a4 4 0 0 1 5.66 5.66"></svg:path>`,
})
export class PhArrowURightDownThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
