import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArrowsAltIcon],svg[la-arrows-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 1.586l-5.707 5.707l1.414 1.414L15 5.414V15H5.414l3.293-3.293l-1.414-1.414L1.586 16l5.707 5.707l1.414-1.414L5.414 17H15v9.586l-3.293-3.293l-1.414 1.414L16 30.414l5.707-5.707l-1.414-1.414L17 26.586V17h9.586l-3.293 3.293l1.414 1.414L30.414 16l-5.707-5.707l-1.414 1.414L26.586 15H17V5.414l3.293 3.293l1.414-1.414z"></svg:path>`,
})
export class LaArrowsAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
