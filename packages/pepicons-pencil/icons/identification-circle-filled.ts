import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilIdentificationCircleFilledIcon],svg[pepicons-pencil-identification-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilIdentificationCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M7 8a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 7 18h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 19 8zM4.5 9.5A2.5 2.5 0 0 1 7 7h12a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 19 19H7a2.5 2.5 0 0 1-2.5-2.5z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.182 10.818a.5.5 0 0 1 .5-.5h2.727a.5.5 0 0 1 0 1h-2.727a.5.5 0 0 1-.5-.5m0 4.092a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0-2.728a.5.5 0 0 1 .5-.5h5.454a.5.5 0 0 1 0 1h-5.454a.5.5 0 0 1-.5-.5m0 1.364a.5.5 0 0 1 .5-.5h5.454a.5.5 0 1 1 0 1h-5.454a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M10.773 12.182a1.364 1.364 0 1 1-2.728 0a1.364 1.364 0 0 1 2.728 0"></svg:path><svg:path d="M11.045 14.776c0 .688-.732.622-1.636.622s-1.636.066-1.636-.623c0-.688.732-1.557 1.636-1.557s1.636.87 1.636 1.557"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilIdentificationCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilIdentificationCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
