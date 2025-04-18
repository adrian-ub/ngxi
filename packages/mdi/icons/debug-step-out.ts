import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDebugStepOutIcon],svg[mdi-debug-step-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m1-6h-2V6l-4.5 4.5l-1.42-1.42L12 2.16l6.92 6.92l-1.42 1.42L13 6z"></svg:path>`,
})
export class MdiDebugStepOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
