import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsReIcon],svg[circle-flags-re-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsRe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsRe0)"><svg:path fill="#0052b4" d="M64 0L0 64v160l32 32l-32 32v224l256-32l256 32V288l-32-32l32-32V64L448 0H288l-32 32l-32-32z"></svg:path><svg:path fill="#d80027" d="M256 256L0 512h512z"></svg:path><svg:path fill="#ffda44" d="M0 224v64l512-64v64z"></svg:path><svg:path fill="#ffda44" d="M256 256L0 64V0h64zm0 0L448 0h64v64zm0 0L224 0h64z"></svg:path></svg:g>`,
})
export class CircleFlagsReIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
