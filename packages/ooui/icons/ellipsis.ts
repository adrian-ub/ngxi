import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiEllipsisIcon],svg[ooui-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="3" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="17" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class OouiEllipsisIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
