import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPinpointCircleFilledIcon],svg[pepicons-pencil-pinpoint-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilPinpointCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path d="M6 11.123C6 15.125 10.223 22 13 22s7-6.875 7-10.877C20 7.191 16.868 4 13 4s-7 3.191-7 7.123m13 0C19 14.643 15.096 21 13 21s-6-6.357-6-9.877C7 7.74 9.688 5 13 5s6 2.74 6 6.123"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilPinpointCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilPinpointCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
