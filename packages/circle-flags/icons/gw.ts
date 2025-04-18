import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsGwIcon],svg[circle-flags-gw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsGw0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsGw0)"><svg:path fill="#d80027" d="M0 0h189.2l54 257.6l-54 254.4H0z"></svg:path><svg:path fill="#ffda44" d="M189.2 0H512v256l-159 53.5L189.1 256z"></svg:path><svg:path fill="#6da544" d="M189.2 256H512v256H189.2z"></svg:path><svg:path fill="#333" d="m96.7 189.2l16.6 51H167l-43.4 31.6l16.5 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6h53.7z"></svg:path></svg:g>`,
})
export class CircleFlagsGwIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
