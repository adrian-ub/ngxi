import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibStitcherIcon],svg[cib-stitcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.974 9.25h-.479v13.5h.479zm-.995 1.5H22.5v10.5h.479zm-1.489 0H0v10.5h21.49zm10.51 0h-6.01v10.5H32zm-7.01 0h-.479v10.5h.479z"></svg:path>`,
})
export class CibStitcherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
