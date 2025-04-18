import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSoftDrinkCircleFilledIcon],svg[pepicons-pop-soft-drink-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopSoftDrinkCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M16.411 7H9.589a2.502 2.502 0 0 0-2.481 2.803l1.22 10A2.5 2.5 0 0 0 10.809 22h4.385a2.5 2.5 0 0 0 2.481-2.198l1.218-10A2.5 2.5 0 0 0 16.41 7M9.529 9.004L9.589 9h6.822a.5.5 0 0 1 .496.56l-1.217 10a.5.5 0 0 1-.496.44h-4.385a.5.5 0 0 1-.496-.44l-1.22-10a.5.5 0 0 1 .436-.556" clip-rule="evenodd"></svg:path><svg:path d="M12.217 17.72a.75.75 0 0 1-1.434-.44l4-13a.75.75 0 1 1 1.434.44z"></svg:path><svg:path d="M8.5 13.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zm6.818-8.022a.75.75 0 0 1 .364-1.456l4 1a.75.75 0 1 1-.364 1.456z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopSoftDrinkCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopSoftDrinkCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
