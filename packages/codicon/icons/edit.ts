import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconEditIcon],svg[codicon-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.23 1h-1.46L3.52 9.25l-.16.22L1 13.59L2.41 15l4.12-2.36l.22-.16L15 4.23V2.77zM2.41 13.59l1.51-3l1.45 1.45zm3.83-2.06L4.47 9.76l8-8l1.77 1.77z"></svg:path>`,
})
export class CodiconEditIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
