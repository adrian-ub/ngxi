import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAppsSettingsIcon],svg[cil-apps-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 160a64 64 0 1 0-64-64a64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32m168-32a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168 32a64 64 0 1 0-64-64a64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32M88 192a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168-96a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m168-96a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32m0 64a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64m0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32M56 408h32v32H56zm96 0h32v32h-32zm96 0h32v32h-32z"></svg:path>`,
})
export class CilAppsSettingsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
