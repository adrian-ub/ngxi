import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonKubeletIcon],svg[carbon-kubelet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.044 27.294l-3.082-10.018l-1.013 3.04A1 1 0 0 1 15 21H9v-2h5.28l1.771-5.316A.98.98 0 0 1 17 13c.437.005.822.29.955.706l3.01 9.778l1.073-3.759A1 1 0 0 1 23 19h5v2h-4.246l-1.793 6.275a1 1 0 0 1-.951.725H21a1 1 0 0 1-.956-.706"></svg:path><svg:path fill="currentColor" d="M16 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v9h-2V6H6v20h10z"></svg:path>`,
})
export class CarbonKubeletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
