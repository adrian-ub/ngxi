import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiVerticalEllipsisIcon],svg[ooui-vertical-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="3" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="17" r="2" fill="currentColor"></svg:circle>`,
})
export class OouiVerticalEllipsisIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
