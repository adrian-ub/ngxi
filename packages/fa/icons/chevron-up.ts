import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faChevronUpIcon],svg[fa-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1619 1075l-166 165q-19 19-45 19t-45-19L832 709l-531 531q-19 19-45 19t-45-19L45 1075q-19-19-19-45.5T45 984l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5"></svg:path>`,
})
export class FaChevronUpIcon {
  readonly viewBox = input("0 0 1664 1280")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
