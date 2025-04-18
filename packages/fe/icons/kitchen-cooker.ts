import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feKitchenCookerIcon],svg[fe-kitchen-cooker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.268 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-.268a2 2 0 0 1-3.464 0H7.732a2 2 0 0 1-3.464 0M4 6v12h16V6zm2 6h12v4H6zm0-4h5v2H6zm4 5v1h4v-1zm4-3a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class FeKitchenCookerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
