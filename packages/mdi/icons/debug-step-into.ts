import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDebugStepIntoIcon],svg[mdi-debug-step-into-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m1-20v11l4.5-4.5l1.42 1.42L12 16.84L5.08 9.92L6.5 8.5L11 13V2z"></svg:path>`,
})
export class MdiDebugStepIntoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
