import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerDownLeftFillIcon],svg[ri-corner-down-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14V5h-2v7H9.414V6.586L3 13l6.414 6.414V14z"></svg:path>`,
})
export class RiCornerDownLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
