import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkupFilledIcon],svg[tdesign-markup-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m5.61 18.038a9 9 0 0 1-1.778 1.108L14.228 14H9.773l-1.605 6.146a9 9 0 0 1-1.777-1.108L8.228 12H10V8.586l2-2l2 2V12h1.773z"></svg:path>`,
})
export class TdesignMarkupFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
