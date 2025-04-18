import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCameraswitchIcon],svg[ic-sharp-cameraswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6h-4L9 7H6v10h12V7h-3zm-2 8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="m8.57.51l4.48 4.48V2.04c4.72.47 8.48 4.23 8.95 8.95h2C23.34 3.02 15.49-1.59 8.57.51m2.38 21.45c-4.72-.47-8.48-4.23-8.95-8.95H0c.66 7.97 8.51 12.58 15.43 10.48l-4.48-4.48z"></svg:path>`,
})
export class IcSharpCameraswitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
