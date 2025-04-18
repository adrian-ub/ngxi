import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonImageServiceIcon],svg[carbon-image-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 4h2v8h-2zM9 4h2v8H9zm12 8h-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-2-6v4h2V6zm2 8h2v8h-2zM9 14h2v8H9zm8 8h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-2-6v4h2v-4z"></svg:path>`,
})
export class CarbonImageServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
