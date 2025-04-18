import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCuIcon],svg[circle-flags-cu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCu0)"><svg:path fill="#0052b4" d="M0 0h512v102.4L483.8 151l28.2 53.8v102.4l-30.5 50.7l30.5 51.7V512H0l39.8-257z"></svg:path><svg:path fill="#ff9811" d="M0 44.5v423V256z"></svg:path><svg:path fill="#eee" d="M27.2 102.4v102.4H512V102.4zm0 204.8v102.4H512V307.2z"></svg:path><svg:path fill="#d80027" d="M0 0v512l256-256z"></svg:path><svg:path fill="#eee" d="m103.6 189.2l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51l-43.4-31.6H87z"></svg:path></svg:g>`,
})
export class CircleFlagsCuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
