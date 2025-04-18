import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPrintSharpIcon],svg[famicons-print-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 96V56a8 8 0 0 0-8-8H120a8 8 0 0 0-8 8v40"></svg:path><svg:rect width="208" height="160" x="152" y="264" fill="none" rx="4" ry="4"></svg:rect><svg:rect width="208" height="160" x="152" y="264" fill="none" rx="4" ry="4"></svg:rect><svg:path fill="currentColor" d="M408 112H104a56 56 0 0 0-56 56v208a8 8 0 0 0 8 8h56v72a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-72h56a8 8 0 0 0 8-8V168a56 56 0 0 0-56-56m-48 308a4 4 0 0 1-4 4H156a4 4 0 0 1-4-4V268a4 4 0 0 1 4-4h200a4 4 0 0 1 4 4Zm34-212.08a24 24 0 1 1 22-22a24 24 0 0 1-22 22"></svg:path>`,
})
export class FamiconsPrintSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
