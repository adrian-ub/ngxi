import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMaintenanceWarningFilledIcon],svg[ix-maintenance-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 42.667c117.627 0 213.334 95.707 213.334 213.333S373.627 469.334 256 469.334c-117.626 0-213.333-95.707-213.333-213.334c0-117.626 95.707-213.333 213.333-213.333m.914 115.448c-20.234-15.39-46.684-20.697-65.64-16.41l32.82 32.82l-16.41 32.82l-32.82 16.411l-32.821-32.82c-4.287 18.956 1.02 45.406 16.41 65.64c20.982 16.138 46.794 21.582 65.64 16.41l74.87 71.075q21.296 18.79 42.593-2.505q22.627-22.627 0-45.255q-69.2-67.893-68.231-72.545c5.17-18.845-.274-44.658-16.41-65.64"></svg:path>`,
})
export class IxMaintenanceWarningFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
