import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilWaterDropCircleFilledIcon],svg[pepicons-pencil-water-drop-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilWaterDropCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.058 13.856a.603.603 0 0 0-.439-.667a.49.49 0 0 0-.603.42l.52.125l-.52-.125v.003l-.001.004l-.002.01a2 2 0 0 0-.013.14a3 3 0 0 0-.004.354c.013.283.068.681.256 1.078c.187.395.457.688.665.876a3 3 0 0 0 .389.298l.009.005l.003.002l.002.001l.234-.482l-.233.483a.49.49 0 0 0 .706-.202a.603.603 0 0 0-.24-.763h.003l-.008-.004l-.045-.031a2 2 0 0 1-.169-.136a1.6 1.6 0 0 1-.38-.491a1.6 1.6 0 0 1-.138-.61a2 2 0 0 1 .007-.277z"></svg:path><svg:path d="M16.327 4.641c.54.27.302.751.05 1.257c-.274.554-.564 1.138.146 1.504a7.133 7.133 0 1 1-9.61 3.066c1.07-2.073 4.102-5.059 8.917-5.763q.245-.036.496-.064M15.311 5.81c-4.088.817-6.626 3.404-7.511 5.118a6.133 6.133 0 1 0 8.263-2.636a1.87 1.87 0 0 1-.736-.649a1.6 1.6 0 0 1-.248-.914c.009-.345.124-.673.232-.919"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilWaterDropCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilWaterDropCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
