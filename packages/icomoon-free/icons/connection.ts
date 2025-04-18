import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeConnectionIcon],svg[icomoon-free-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9c1.654 0 3.154.673 4.241 1.759l-1.414 1.414C12.103 11.449 11.103 11 10 11s-2.103.449-2.827 1.173l-1.414-1.414A5.98 5.98 0 0 1 10 9M2.929 7.929C4.818 6.04 7.329 5 10 5s5.182 1.04 7.071 2.929l-1.414 1.414C14.146 7.832 12.137 7 10 7s-4.146.832-5.657 2.343zM15.45 2.101a14 14 0 0 1 4.45 3l-1.414 1.414C16.219 4.249 13.206 3 10.001 3S3.782 4.248 1.516 6.515L.102 5.101A13.96 13.96 0 0 1 10.002 1c1.89 0 3.723.37 5.45 1.101zM9 14a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class IcomoonFreeConnectionIcon {
  readonly viewBox = input("0 0 20 16")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
