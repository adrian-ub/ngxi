import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopChainCircleFilledIcon],svg[pepicons-pop-chain-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopChainCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.392 14.564a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.353a4 4 0 1 1 6.707 4.362l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path><svg:path d="M8.444 18.503a2 2 0 0 1-.587-2.767l2.181-3.353a2 2 0 1 1 3.353 2.18l-2.18 3.354a2 2 0 0 1-2.767.586m-2.442.202a4 4 0 0 1 .179-4.06l2.18-3.352a4 4 0 1 1 6.707 4.361l-2.18 3.353a4 4 0 0 1-6.886-.302"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopChainCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopChainCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
