import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignBuildTwotoneIcon],svg[ant-design-build-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M144 546h200v200H144zm268-268h200v200H412z"></svg:path><svg:path fill="currentColor" d="M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32M344 746H144V546h200zm268 0H412V546h200zm0-268H412V278h200zm268 0H680V278h200z"></svg:path>`,
})
export class AntDesignBuildTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
