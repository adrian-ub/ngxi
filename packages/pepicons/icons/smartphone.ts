import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsSmartphoneIcon],svg[pepicons-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.25 3a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v12a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25V3Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14.5 0h-9c-1.105 0-2 .943-2 2.105v15.79c0 1.162.895 2.105 2 2.105h9c1.105 0 2-.943 2-2.105V2.105C16.5.943 15.605 0 14.5 0Zm-9 18V2h9v16h-9Z" clip-rule="evenodd"></svg:path><svg:path d="M10.5 16.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"></svg:path><svg:path fill-rule="evenodd" d="M9 16.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsSmartphoneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
