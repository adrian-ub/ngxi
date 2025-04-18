import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCloudSunIcon],svg[pixelarticons-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0h2v4h-2zm1 12H8v2H4v2H2v4h2v2h10v-2h2v-4h-2v-2h-2zm0 2v2h2v4H4v-4h4v2h2v-2H8v-2zM8 6h6v2H8zm0 2v2H6V8zm8 2h-2V8h2zm0 0h2v2h-2zm4-8h2v2h-2zm0 2v2h-2V4zM2 2h2v2H2zm2 2h2v2H4zm20 7h-4v2h4z"></svg:path>`,
})
export class PixelarticonsCloudSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
