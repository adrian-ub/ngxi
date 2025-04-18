import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignZoomOutFilledIcon],svg[tdesign-zoom-out-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.49 16.51a8.5 8.5 0 0 0 11.272.666l5.344 5.345l1.415-1.414l-5.345-5.345A8.501 8.501 0 0 0 4.49 4.49a8.5 8.5 0 0 0 0 12.02M6.5 9.5h8v2h-8z"></svg:path>`,
})
export class TdesignZoomOutFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
