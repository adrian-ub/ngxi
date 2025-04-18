import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleLineIconsBanIcon],svg[simple-line-icons-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0M64 512c0-112.272 41.615-214.959 110.096-293.663l631.856 631.856C727.216 919.073 624.416 961.008 512 961.008c-247.024 0-448-201.984-448-449.009zm787.023 292.786L219.408 173.17C297.984 105.235 400.24 64.002 512 64.002c247.024 0 448 200.976 448 448c0 111.664-41.152 214.032-108.977 292.784"></svg:path>`,
})
export class SimpleLineIconsBanIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
