import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAoIcon],svg[circle-flags-ao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAo0)"><svg:path fill="#d80027" d="M0 0h512v256l-253 36.6L0 256z"></svg:path><svg:path fill="#333" d="M0 256h512v256H0z"></svg:path><svg:g fill="#ffda44"><svg:path d="m220.9 203.6l21.7 15.8l-8.3 25.5L256 229l21.7 15.7l-8.3-25.5l21.7-15.7h-26.8L256 178l-8.3 25.5z"></svg:path><svg:path d="M320 145.1a127.2 127.2 0 0 0-64-17v33.3a94 94 0 0 1 47.3 12.7a94.7 94.7 0 0 1-94.6 163.8a94 94 0 0 1-31.6-29.8l-27.9 18.4a128.1 128.1 0 0 0 217.7-6.5A128.1 128.1 0 0 0 320 145.1"></svg:path><svg:path d="M182.2 233.7a33.4 33.4 0 0 0 13.3 45.4l108.4 59.2c-7.4 13.5-3.4 30 10 37.3l29.3 16a27.8 27.8 0 0 0 37.8-11l16-29.3z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsAoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
