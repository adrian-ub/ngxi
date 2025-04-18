import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleDownFilledIcon],svg[pepicons-pop-triangle-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.866 15.499a1 1 0 0 1-1.732 0l-5.769-10A1 1 0 0 1 4.231 4H15.77a1 1 0 0 1 .866 1.5z"></svg:path><svg:path d="M3.365 5.5A1 1 0 0 1 4.231 4H15.77a1 1 0 0 1 .866 1.5l-5.769 9.999a1 1 0 0 1-1.732 0zM10 10.997L12.306 7H7.694z"></svg:path></svg:g>`,
})
export class PepiconsPopTriangleDownFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
