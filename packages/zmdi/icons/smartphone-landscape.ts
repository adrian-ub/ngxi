import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneLandscapeIcon],svg[zmdi-smartphone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 85q0-17 12.5-29.5T43 43h384q17 0 29.5 12.5T469 85v214q0 17-12.5 29.5T427 341H43q-18 0-30.5-12.5T0 299zm384 0H85v214h299z"></svg:path>`,
})
export class ZmdiSmartphoneLandscapeIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
