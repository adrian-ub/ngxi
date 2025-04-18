import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagNorthKoreaIcon],svg[twemoji-flag-north-korea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#024FA2" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#EEE" d="M0 9h36v1H0zm0 17h36v1H0z"></svg:path><svg:path fill="#ED1C27" d="M0 10h36v16H0z"></svg:path><svg:path fill="#FFF" d="M13.278 23.778a5.778 5.778 0 1 0 0-11.556a5.778 5.778 0 0 0 0 11.556m-1.257-7.508l1.257-3.868l1.257 3.868h4.067l-3.29 2.39l1.257 3.868l-3.29-2.39l-3.29 2.39l1.257-3.868l-3.29-2.39z"></svg:path>`,
})
export class TwemojiFlagNorthKoreaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
