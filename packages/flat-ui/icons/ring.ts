import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiRingIcon],svg[flat-ui-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ECF0F1" d="M50-.027c27.613 0 50 22.386 50 50c0 27.613-22.387 50-50 50c-27.614 0-50-22.387-50-50c0-27.614 22.386-50 50-50"></svg:path><svg:defs><svg:circle id="flatUiRing0" cx="50" cy="49.973" r="50"></svg:circle></svg:defs><svg:clippath id="flatUiRing1"><svg:use href="#flatUiRing0"></svg:use></svg:clippath><svg:g clip-path="url(#flatUiRing1)"><svg:path fill="#526476" d="M-1 71.973h80v49H-1z"></svg:path><svg:path fill="#F1C40E" d="M29.5 56.973h41a2.499 2.499 0 1 1 0 5h-41a2.5 2.5 0 1 1 0-5"></svg:path><svg:path fill="#F39C12" d="M30 52.973h40v4H30z"></svg:path><svg:path fill="#E79410" d="M30 52.973h20v4H30z"></svg:path><svg:path fill="#F1C40E" d="M47 33.973h6c10.493 0 19 8.507 19 19H28c0-10.493 8.507-19 19-19"></svg:path><svg:path fill="#F39C12" d="M54 29.473a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0 0 3H47a2 2 0 0 1 2 2v1h2v-1a2 2 0 0 1 2-2h-.5a1.5 1.5 0 0 0 1.5-1.5"></svg:path><svg:path fill="#E79410" d="M47.5 27.973a1.5 1.5 0 0 0 0 3H47a2 2 0 0 1 2 2v1h1v-6z"></svg:path><svg:path fill="#E5BA0D" d="M50 33.973h-3c-10.493 0-19 8.507-19 19h22zm-20.5 23a2.499 2.499 0 1 0 0 5H50v-5z"></svg:path><svg:path fill="#455564" d="M-1 72.973v48h37l43-43v-5z"></svg:path><svg:path fill="#2C3E50" d="M-1 61.973h85v12H-1z"></svg:path></svg:g>`,
})
export class FlatUiRingIcon {
  readonly viewBox = input("-1 -0.027 101 100")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
