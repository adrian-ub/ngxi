import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWallpaperIcon],svg[zmdi-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 45v150H0V45q0-17 12.5-29.5T43 3h149v42zm128 192l63 79l43-57l64 85H85zm149-95.5q0 13.5-9.5 22.5t-22.5 9t-22.5-9t-9.5-22.5t9.5-23T288 109t22.5 9.5t9.5 23M384 3q18 0 30.5 12.5T427 45v150h-43V45H235V3zm0 384V237h43v150q0 17-12.5 29.5T384 429H235v-42zM43 237v150h149v42H43q-18 0-30.5-12.5T0 387V237z"></svg:path>`,
})
export class ZmdiWallpaperIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
