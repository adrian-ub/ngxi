import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSippyCupIcon],svg[icon-park-solid-sippy-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m34 44l3-28H11l3.5 28zM24 10l-2-6M6 16h36m-5.005 9s5.47 0 4.973 4.404C41.471 33.81 36 32.929 36 32.929M11.005 25s-5.47 0-4.973 4.404C6.529 33.81 12 32.929 12 32.929"></svg:path><svg:path fill="currentColor" d="M37 10H11v6h26z"></svg:path></svg:g>`,
})
export class IconParkSolidSippyCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
