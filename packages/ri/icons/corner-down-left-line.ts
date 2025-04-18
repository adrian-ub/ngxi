import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerDownLeftLineIcon],svg[ri-corner-down-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14V5h-2v7H6.828l3.95-3.95l-1.414-1.414L3 13l6.364 6.364l1.414-1.414L6.828 14z"></svg:path>`,
})
export class RiCornerDownLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
