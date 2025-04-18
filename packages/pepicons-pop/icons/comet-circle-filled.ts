import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCometCircleFilledIcon],svg[pepicons-pop-comet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCometCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.29 16.093a1 1 0 1 0 1.52-1.3a1 1 0 0 0-1.52 1.3m2.71 1.63a3 3 0 1 1-3.9-4.56a3 3 0 0 1 3.9 4.56"></svg:path><svg:path d="M13.907 19.949a5.921 5.921 0 1 1-7.677-9.015l7.08-5.836c1.078-.89 2.68.05 2.43 1.425l-.263 1.445l4.558-3.799c1.304-1.086 3.125.487 2.24 1.934l-2.858 4.678l.896-.1c1.458-.162 2.258 1.649 1.156 2.618zm-6.89-1.897a3.92 3.92 0 0 0 5.57.395l6.37-5.603l-.333.037c-1.24.138-2.096-1.209-1.445-2.273l1.812-2.965l-3.292 2.743c-1.077.898-2.687-.041-2.436-1.42l.264-1.456l-6.024 4.967a3.92 3.92 0 0 0-.485 5.575"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCometCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCometCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
