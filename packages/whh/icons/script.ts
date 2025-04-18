import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhScriptIcon],svg[whh-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.77 1024q-39-25-51.5-68.5T832.77 843v-69q0-29 19-49.5t45-20.5h64q27 0 45.5 20.5t18.5 49.5v69q0 53-38 100.5t-90 80.5m-96 0h-608q-67 0-127.5-57.5T1.77 832q0-49 22.5-111t50-110t69.5-118.5t62-108.5h371q53 0 90.5-37.5t37.5-90.5v-64q0-39 34.5-85.5t80-76.5t77.5-30q46 0 85.5 63t42.5 129q0 54-26.5 121t-64 130.5t-75 125.5t-64 123.5t-26.5 107.5q5 106 32 224m-160-832v64q0 26-18.5 45t-45.5 19h-512q-26 0-45-19t-19-45v-64q0-51 34-96t85.5-70.5T224.77 0h544q-13 0-34.5 15.5T691.77 56t-36 62t-15 74"></svg:path>`,
})
export class WhhScriptIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
