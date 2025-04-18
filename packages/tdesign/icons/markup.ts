import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkupIcon],svg[tdesign-markup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a9 9 0 0 0-5.61 16.038L8.228 12H10V8.586l2-2l2 2V12h1.773l1.837 7.038A9 9 0 0 0 12 3m3.832 17.146L14.227 14H9.772l-1.604 6.146A9 9 0 0 0 12 21c1.372 0 2.67-.306 3.832-.854M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11a10.99 10.99 0 0 1-5.5 9.528A10.95 10.95 0 0 1 12 23a10.95 10.95 0 0 1-6.013-1.787A10.99 10.99 0 0 1 1 12"></svg:path>`,
})
export class TdesignMarkupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
