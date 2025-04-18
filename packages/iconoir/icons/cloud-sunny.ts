import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirCloudSunnyIcon],svg[iconoir-cloud-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 13c-1.667 0-5 1-5 5s3.333 5 5 5h12c1.667 0 5-1 5-5s-3.333-5-5-5m-6-1a3 3 0 1 0 0-6a3 3 0 0 0 0 6m7-3h1m-8-7V1m6.5 2.5l-1 1m-12-1l1 1M4 9h1"></svg:path>`,
})
export class IconoirCloudSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
