import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsUndoIcon],svg[ls-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 270v66c0 14-11 20-22 12L9 192c-12-8-12-23 0-31L226 4c11-8 22-3 22 11v65c49 0 150 6 216 49c151 99 238 423-256 587c0 0 298-149 246-354c-13-55-74-104-206-92"></svg:path>`,
})
export class LsUndoIcon {
  readonly viewBox = input("0 0 583 716")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
