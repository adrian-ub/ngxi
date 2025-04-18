import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopIdentificationCircleIcon],svg[pepicons-pop-identification-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="pepiconsPopIdentificationCircle0" fill="currentColor" d="M8 11.628c0 .63-.672.57-1.5.57s-1.5.06-1.5-.57c0-.631.672-1.428 1.5-1.428s1.5.797 1.5 1.428"></svg:path></svg:defs><svg:g fill="none"><svg:g transform="translate(3 3)"><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 8H12m-2.5 3.75h5m-5-2.5h5m-5 1.25h5"></svg:path><svg:circle cx="6.5" cy="9.25" r="1.25" fill="currentColor"></svg:circle><svg:use href="#pepiconsPopIdentificationCircle0"></svg:use><svg:rect width="16" height="11" x="2" y="4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="2"></svg:rect><svg:path fill="currentColor" fill-rule="evenodd" d="M9 8a.5.5 0 0 1 .5-.5H12a.5.5 0 0 1 0 1H9.5A.5.5 0 0 1 9 8m0 3.75a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 1.25a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.75 9.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:use href="#pepiconsPopIdentificationCircle0"></svg:use><svg:path fill="currentColor" fill-rule="evenodd" d="M1 6.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill="currentColor" fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopIdentificationCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
