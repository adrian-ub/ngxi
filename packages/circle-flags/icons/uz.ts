import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUzIcon],svg[circle-flags-uz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUz0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUz0)"><svg:path fill="#d80027" d="m0 178l254.2-22L512 178v22.3l-40.2 54.1l40.2 57.3V334l-254 23.4L0 334v-22.3l36.7-59.4l-36.7-52z"></svg:path><svg:path fill="#338af3" d="M0 0h512v178H0z"></svg:path><svg:path fill="#eee" d="M0 200.3h512v111.4H0z"></svg:path><svg:path fill="#6da544" d="M0 334h512v178H0z"></svg:path><svg:path fill="#eee" d="M117.2 105.7a50 50 0 0 1 39.3-48.9a50.2 50.2 0 0 0-10.7-1.1a50 50 0 1 0 10.7 99c-22.5-5-39.3-25-39.3-49m69 22.8l3.3 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.7 6.4l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.4 10.4l-8.8-6.4l-9 6.4l3.5-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.8 6.4l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.8 6.4l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.4l-8.8 6.4l3.4-10.4l-8.8-6.5h11zm-105-36.4l3.4 10.4h11l-9 6.5l3.4 10.4l-8.8-6.5l-9 6.5l3.5-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.5l-8.8 6.5l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.5l-8.8 6.5l3.4-10.4l-9-6.5h11zm35 0l3.4 10.4h11l-9 6.5l3.5 10.4l-9-6.5l-8.8 6.5l3.4-10.4l-8.8-6.5h11zm-70-36.4l3.4 10.4h11l-9 6.4l3.6 10.5l-9-6.5l-8.8 6.5l3.4-10.5l-9-6.4h11zm35 0l3.4 10.4h11l-9 6.4l3.6 10.5l-9-6.5l-8.8 6.5l3.4-10.5l-9-6.4h11zm35 0l3.4 10.4h11l-9 6.4l3.6 10.5l-9-6.5l-8.8 6.5l3.4-10.5l-8.8-6.4h11z"></svg:path></svg:g>`,
})
export class CircleFlagsUzIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
