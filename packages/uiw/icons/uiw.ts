import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwUiwIcon],svg[uiw-uiw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.976 0l4.475 3.418l-1.71 5.531H3.21L1.5 3.42zm0 20L1.5 16.582l1.71-5.531h5.532l1.709 5.53zM18.5 12.968l-5.261 1.797l-3.252-4.705l3.252-4.705L18.5 7.152z"></svg:path>`,
})
export class UiwUiwIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
