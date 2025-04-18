import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopIdentificationOffIcon],svg[pepicons-pop-identification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="pepiconsPopIdentificationOff0" fill="currentColor" d="M8 11.628c0 .63-.672.57-1.5.57s-1.5.06-1.5-.57c0-.631.672-1.428 1.5-1.428s1.5.797 1.5 1.428"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 8H12m-2.5 3.75h5m-5-2.5h5m-5 1.25h5"></svg:path><svg:circle cx="6.5" cy="9.25" r="1.25" fill="currentColor"></svg:circle><svg:use href="#pepiconsPopIdentificationOff0"></svg:use><svg:rect width="16" height="11" x="2" y="4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="2"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9 8a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H9.5A.5.5 0 0 1 9 8m0 3.75a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 1.25a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 9.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:use href="#pepiconsPopIdentificationOff0"></svg:use><svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopIdentificationOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
