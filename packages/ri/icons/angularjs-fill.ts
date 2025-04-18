import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAngularjsFillIcon],svg[ri-angularjs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l9.3 3.32l-1.418 12.31L12 22l-7.88-4.37L2.7 5.32zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.935l1.168 2.92h2.168zm1.698 8.33h-3.396L12 8.45z"></svg:path>`,
})
export class RiAngularjsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
