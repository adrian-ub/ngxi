import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSoftDrinkIcon],svg[pepicons-pop-soft-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.411 4H6.589a2.502 2.502 0 0 0-2.481 2.803l1.22 10A2.5 2.5 0 0 0 7.809 19h4.385a2.5 2.5 0 0 0 2.481-2.198l1.218-10A2.5 2.5 0 0 0 13.41 4M6.529 6.004L6.589 6h6.822a.5.5 0 0 1 .496.56l-1.217 10a.5.5 0 0 1-.496.44H7.809a.5.5 0 0 1-.496-.44l-1.22-10a.5.5 0 0 1 .436-.556" clip-rule="evenodd"></svg:path><svg:path d="M9.217 14.72a.75.75 0 0 1-1.434-.44l4-13a.75.75 0 1 1 1.434.44z"></svg:path><svg:path d="M5.5 10.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zm6.818-8.022a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 1 1-.364 1.456z"></svg:path></svg:g>`,
})
export class PepiconsPopSoftDrinkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
