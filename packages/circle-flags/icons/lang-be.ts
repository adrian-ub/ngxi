import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangBeIcon],svg[circle-flags-lang-be-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangBe0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangBe0)"><svg:path fill="#eee" d="M0 0h155.8l35 254.6l-35 257.4H0z"></svg:path><svg:path fill="#a2001d" d="M155.8 0H512v345.1l-183 37.4l-173.2-37.4z"></svg:path><svg:path fill="#6da544" d="M155.8 345.1H512V512H155.8z"></svg:path><svg:path fill="#a2001d" d="M50 .2L22.3 50l27.8 50.4L77.9 50zm55.8 0L78 50l27.7 50.4l28-50.4zM50 137.5l-27.7 49.6l27.8 50.5l27.7-50.5zm55.8 0L78 187.1l27.7 50.5l28-50.5zM50 274.7l-27.7 49.7l27.8 50.4l27.8-50.4zm55.8 0L78 324.4l27.7 50.4l28-50.4zM50 412l-27.7 49.6l27.8 50.5l27.7-50.5zm55.8 0L78 461.6l27.7 50.5l28-50.5z"></svg:path></svg:g>`,
})
export class CircleFlagsLangBeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
