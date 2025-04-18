import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandLeftLineIcon],svg[ri-expand-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.071 4.929l1.414 1.414L6.828 11H16v2H6.828l4.657 4.657l-1.414 1.414L3 12zM18.001 19V5h2v14z"></svg:path>`,
})
export class RiExpandLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
