import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsKmIcon],svg[circle-flags-km-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsKm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsKm0)"><svg:path fill="#ffda44" d="M124.4 149.7L512 132.8V0H0z"></svg:path><svg:path fill="#eee" d="M112.5 132.8H512v122.4l-294.2 16.6z"></svg:path><svg:path fill="#d80027" d="M512 255.3H234.5l-136 139.8L512 377.7V256z"></svg:path><svg:path fill="#0052b4" d="M108.2 377.7L0 511.2l512 .8V377.7z"></svg:path><svg:path fill="#6da544" d="M.8 0L0 511.2l256-256z"></svg:path><svg:g fill="#eee"><svg:path d="M67.5 255.3a78 78 0 0 1 61.2-76a78.2 78.2 0 0 0-16.7-2a78 78 0 1 0 16.7 154a78 78 0 0 1-61.2-76"></svg:path><svg:path d="m127.9 188.5l4.1 12.7h13.4l-10.8 8l4.1 12.7l-10.8-8l-10.9 8l4.2-12.8l-10.9-7.9h13.4zm0 33.4l4.1 12.7h13.4l-10.8 8l4.1 12.7l-10.8-8l-10.9 8l4.2-12.8l-10.9-7.9h13.4zm0 33.4L132 268h13.4l-10.8 8l4.1 12.6l-10.8-7.8l-10.9 7.8l4.2-12.7l-10.9-7.9h13.4zm0 33.3l4.1 12.8h13.4l-10.8 8l4.1 12.6l-10.8-7.8L117 322l4.2-12.7l-10.9-7.9h13.4z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsKmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
