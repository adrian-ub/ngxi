import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsBuildingIcon],svg[dashicons-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20h14V0H3zM7 3H5V1h2zm4 0H9V1h2zm4 0h-2V1h2zM7 6H5V4h2zm4 0H9V4h2zm4 0h-2V4h2zM7 9H5V7h2zm4 0H9V7h2zm4 0h-2V7h2zm-8 3H5v-2h2zm4 0H9v-2h2zm4 0h-2v-2h2zm-4 7H5v-6h6zm4-4h-2v-2h2zm0 3h-2v-2h2z"></svg:path>`,
})
export class DashiconsBuildingIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
