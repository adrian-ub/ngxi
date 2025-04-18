import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsSmartphone2PrintIcon],svg[pepicons-smartphone2-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.636 1h8.728C17.267 1 18 1.672 18 2.5v16c0 .828-.733 1.5-1.636 1.5H7.636C6.733 20 6 19.328 6 18.5v-16C6 1.672 6.733 1 7.636 1Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M14.5.5h-9A1.5 1.5 0 0 0 4 2v16a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 16 18V2A1.5 1.5 0 0 0 14.5.5ZM5 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 18V2Z" clip-rule="evenodd"></svg:path><svg:path d="M10 18a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"></svg:path></svg:g>`,
})
export class PepiconsSmartphone2PrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
