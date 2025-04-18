import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignThumbUpIcon],svg[tdesign-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.879 1.383l1.279.213A4 4 0 0 1 15.5 5.54V8h5.32a2 2 0 0 1 1.972 2.329l-1.666 10a2 2 0 0 1-1.973 1.67H7V10.803zm1.234 2.254L9 11.197V20h10.153l1.667-10H13.5V5.54a2 2 0 0 0-1.387-1.904M4 10v12H2V10z"></svg:path>`,
})
export class TdesignThumbUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
