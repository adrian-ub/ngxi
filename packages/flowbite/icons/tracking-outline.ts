import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTrackingOutlineIcon],svg[flowbite-tracking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 19h4m6 0h4m-6.963-4.384V8.634L17 5.94m-4.93 2.662L7.042 5.94M12 2.997l5.033 2.906v5.812L12 14.62l-5.033-2.906V5.903zM14 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class FlowbiteTrackingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
