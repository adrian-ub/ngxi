import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopArrowSpinCircleFilledIcon],svg[pepicons-pop-arrow-spin-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopArrowSpinCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M16.937 7.211a1 1 0 0 1-1.126 1.653A5 5 0 1 0 18 13a1 1 0 1 1 2 0a7 7 0 1 1-3.063-5.789"></svg:path><svg:path d="M16.539 15.506a1 1 0 1 1-1.078-1.685l3.482-2.227a1 1 0 0 1 1.077 1.685z"></svg:path><svg:path d="M21.903 15.41a1 1 0 0 1-1.826.815l-1.508-3.38a1 1 0 1 1 1.826-.815z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopArrowSpinCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopArrowSpinCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
