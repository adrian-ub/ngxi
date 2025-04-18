import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCircleRightAltLightIcon],svg[lets-icons-circle-right-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m10 11l4 4l-4 4"></svg:path><svg:path stroke-linecap="round" d="M9.67 6.153c-2.234.3-4.152 1.018-5.356 2.005c-1.203.988-1.6 2.17-1.108 3.3c.493 1.13 1.836 2.122 3.752 2.77c1.917.648 4.258.902 6.54.71m6.296-2.188c.69-.598 1.096-1.267 1.187-1.956s-.138-1.378-.666-2.016s-1.343-1.206-2.38-1.661c-1.039-.455-2.272-.785-3.606-.964"></svg:path></svg:g>`,
})
export class LetsIconsCircleRightAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
