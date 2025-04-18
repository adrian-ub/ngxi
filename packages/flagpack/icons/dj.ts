import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackDjIcon],svg[flagpack-dj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flagpackDj0" fill="#fff" d="M0 0v24l18-12z"></svg:path></svg:defs><svg:g fill="none"><svg:path fill="#73BE4A" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackDj1" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackDj1)"><svg:path fill="#69F" fill-rule="evenodd" d="M0-2v14h32V-2z" clip-rule="evenodd"></svg:path></svg:g><svg:use href="#flagpackDj0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:mask id="flagpackDj2" width="18" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:use href="#flagpackDj0" fill-rule="evenodd" clip-rule="evenodd"></svg:use></svg:mask><svg:g mask="url(#flagpackDj2)"><svg:path fill="#E31D1C" fill-rule="evenodd" d="m7.002 14.07l-1.87 1.13l.426-2.204L4 11.347l2.11-.09l.892-2.057l.892 2.058H10l-1.554 1.738l.468 2.204z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackDjIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
