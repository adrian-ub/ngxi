import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWindowRestoreIcon],svg[cil-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 153H40.247a24.03 24.03 0 0 0-24 24v281a24.03 24.03 0 0 0 24 24H352a24.03 24.03 0 0 0 24-24V177a24.03 24.03 0 0 0-24-24m-8 32v45.22H48.247V185ZM48.247 450V262.22H344V450Z"></svg:path><svg:path fill="currentColor" d="M472 32H152a24.03 24.03 0 0 0-24 24v65h32V64h304v275.143h-56v32h64a24.03 24.03 0 0 0 24-24V56a24.03 24.03 0 0 0-24-24"></svg:path>`,
})
export class CilWindowRestoreIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
