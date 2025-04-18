import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsCloudIcon],svg[mono-icons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10a6 6 0 0 1 11.671-1.963A6 6 0 0 1 16 20H7a5 5 0 0 1-1.986-9.59A6 6 0 0 1 5 10m6-4a4 4 0 0 0-3.903 4.879a1 1 0 0 1-.757 1.194A3.002 3.002 0 0 0 7 18h9a4 4 0 1 0-.08-8a1 1 0 0 1-1-.8A4 4 0 0 0 11 6"></svg:path>`,
})
export class MonoIconsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
