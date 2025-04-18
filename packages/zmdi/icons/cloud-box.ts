import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCloudBoxIcon],svg[zmdi-cloud-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 277q-27 0-45.5-18.5T107 213q0-24 16.5-42.5T164 150h3q9-20 27.5-31.5T235 107q28 0 48.5 18t24.5 46h1q22 0 38 15.5t16 37.5t-16 37.5t-38 15.5zM427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300z"></svg:path>`,
})
export class ZmdiCloudBoxIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
