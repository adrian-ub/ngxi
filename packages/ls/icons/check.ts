import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsCheckIcon],svg[ls-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M620 0L316 436L106 280L0 427l358 273l410-588z"></svg:path>`,
})
export class LsCheckIcon {
  readonly viewBox = input("0 0 768 700")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
