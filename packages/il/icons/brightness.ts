import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilBrightnessIcon],svg[il-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 333q20 0 34 13t13.5 32.5T80 411t-34 14q-19 0-32-14T0 379q0-20 14-33t32-13m63 242q14-14 33-14t32 14t14 33t-14 33t-32 14t-33-14t-14-33t14-33m65-393q-14 14-32 14t-33-14t-14-33t14-32t33-14t32 14t14 32t-14 33m197-81q-20 0-33-14t-14-32q0-20 14-34t33-13.5T404 21t13 34q0 19-13 32t-33 14m324 232q20 0 33 13t13 32.5t-13 32.5t-33 14t-33-14t-13-32q0-20 13-33t33-13M371 657q19 0 33 13t13.5 33t-13.5 33t-33 13.5t-33-13.5t-13.5-33t13.5-33t33-13m0-463q38 0 72 14t59 40t40 59t14 72t-14 72t-40 59t-59 39t-72 15q-39 0-72-15t-59-39t-40-59t-15-72t15-72t40-59t59-40t72-14m0 278q19 0 36-8t30-20t19-29t7-36t-7-36t-19-30t-30-20t-36-7t-36 7t-29 20t-20 30t-8 36t8 36t20 29t29 20t36 8m196 103q14-14 33-14t33 14t14 33t-14 33t-33 14t-33-14t-14-33t14-33m0-458q14-14 33-14t33 14t14 32t-14 33t-33 14t-33-14t-14-33t14-32"></svg:path>`,
})
export class IlBrightnessIcon {
  readonly viewBox = input("0 0 750 850")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
