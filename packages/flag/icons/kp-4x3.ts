import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKp4x3Icon],svg[flag-kp-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKp4x30"><svg:path fill-opacity=".7" d="M5 .1h682.6V512H5.1z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagKp4x30)" transform="translate(-4.8 -.1)scale(.93768)"><svg:path fill="#fff" stroke="#000" d="M776 511.5H-76V.5h852z"></svg:path><svg:path fill="#3e5698" d="M776 419H-76v92.5h852z"></svg:path><svg:path fill="#c60000" d="M776 397.6H-76V114.4h852z"></svg:path><svg:path fill="#3e5698" d="M776 .6H-76V93h852z"></svg:path><svg:path fill="#fff" d="M328.5 256c0 63.5-53 115-118.6 115S91.3 319.5 91.3 256s53-114.8 118.6-114.8s118.6 51.4 118.6 114.9z"></svg:path><svg:path fill="#c40000" d="m175.8 270.6l-57-40.7l71-.2l22.7-66.4l21.1 66.1l71-.4l-57.9 41.2l21.3 66.1l-57-40.7l-58 41.3z"></svg:path></svg:g>`,
})
export class FlagKp4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
