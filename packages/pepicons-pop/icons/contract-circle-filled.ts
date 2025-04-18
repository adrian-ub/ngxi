import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopContractCircleFilledIcon],svg[pepicons-pop-contract-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopContractCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.707 12.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M14 13a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path><svg:path d="M15 12a1 1 0 1 1-2 0V8a1 1 0 1 1 2 0zm-6.293 6.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z"></svg:path><svg:path d="M13 18a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0z"></svg:path><svg:path d="M8 15a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopContractCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopContractCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
