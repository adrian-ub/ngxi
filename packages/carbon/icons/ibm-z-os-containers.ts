import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmZOsContainersIcon],svg[carbon-ibm-z-os-containers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 12h-9V3h9zm-7-2h5V5h-5z"></svg:path><svg:path fill="currentColor" d="M20 15v2h7v10H17V3H5c-1.103 0-2 .898-2 2v22c0 1.103.897 2 2 2h22c1.103 0 2-.897 2-2V15zM6.414 17H15v8.586zM15 15H6.414L15 6.414zM13.586 5L5 13.586V5zM5 18.414L13.586 27H5z"></svg:path>`,
})
export class CarbonIbmZOsContainersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
