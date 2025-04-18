import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHeapIconIcon],svg[logos-heap-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 89.613h47.999v235.196H0zM104.025 0h47.999v179.196h-47.999z"></svg:path><svg:path fill="#31D891" d="M104.025 235.229h47.999v179.196h-47.999zM208.001 89.613H256v235.196h-47.999z"></svg:path>`,
})
export class LogosHeapIconIcon {
  readonly viewBox = input("0 0 256 415")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
