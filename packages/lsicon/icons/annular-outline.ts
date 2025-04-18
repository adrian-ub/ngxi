import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAnnularOutlineIcon],svg[lsicon-annular-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 8A6.5 6.5 0 0 0 9 1.576v3.595a3 3 0 0 1 1.667 4.205l2.634 2.387A6.47 6.47 0 0 0 14.5 8ZM8 14.5A6.5 6.5 0 0 1 7 1.576v3.595a3.001 3.001 0 1 0 2.5 5.428l2.182 2.758A6.47 6.47 0 0 1 8 14.5Z"></svg:path>`,
})
export class LsiconAnnularOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
