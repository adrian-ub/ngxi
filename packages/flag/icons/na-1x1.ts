import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagNa1x1Icon],svg[flag-na-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagNa1x10"><svg:path fill-opacity=".7" d="M0 0h512v512H0z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagNa1x10)"><svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#3662a2" d="m-108.2.2l.8 368.6L466.6 0z"></svg:path><svg:path fill="#38a100" d="m630.7 511.5l-1.4-383.2l-579 383.5z"></svg:path><svg:path fill="#c70000" d="m-107.9 396.6l.5 115.4l125.3-.2l611.7-410.1L629 1.4L505.2.2z"></svg:path><svg:path fill="#ffe700" d="m154 183.4l-23.1-14l-13.4 23.6l-13-23.8L81 183l.6-27.1l-27 .2l14-23.2L45 119.5l23.8-13L55 83l27 .6l-.1-27.1l23.2 14l13.4-23.6l13 23.7L155.2 57l-.6 27l27-.1l-14 23.2l23.6 13.3l-23.8 13.1l13.7 23.4l-27-.5z"></svg:path><svg:path fill="#3662a2" d="M167.8 120c0 27.2-22.3 49.3-49.8 49.3s-49.7-22.1-49.7-49.4s22.3-49.3 49.8-49.3s49.7 22 49.7 49.3z"></svg:path><svg:path fill="#ffe700" d="M157 120a39 39 0 1 1-77.9 0a39 39 0 0 1 77.9 0"></svg:path></svg:g>`,
})
export class FlagNa1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
