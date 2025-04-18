import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siHomeDetailedFillIcon],svg[si-home-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#siHomeDetailedFill0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M21 19.588V8.884l1.451.952a1 1 0 1 0 1.098-1.672L19 5.179V3a1 1 0 1 0-2 0v.866l-3.73-2.448a2.2 2.2 0 0 0-2.58 0L.45 8.165a1 1 0 1 0 1.1 1.67L3 8.88v10.708A2.4 2.4 0 0 0 5.4 22h13.2a2.4 2.4 0 0 0 2.4-2.412M8 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m2 5v8H8v-8.2c0-.992.808-1.8 1.8-1.8h4.4c.992 0 1.8.808 1.8 1.8V21h-2v-8z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="siHomeDetailedFill0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class SiHomeDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
